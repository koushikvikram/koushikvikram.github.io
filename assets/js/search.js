(function () {
  var root = null;
  var trigger = null;
  var dialog = null;
  var veil = null;
  var input = null;
  var status = null;
  var results = null;
  var lastFocused = null;
  var indexPromise = null;
  var posts = [];

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function indexUrl() {
    return root ? root.getAttribute("data-search-index-url") || "/search.json" : "/search.json";
  }

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(indexUrl(), { credentials: "same-origin" })
        .then(function (response) {
          if (!response.ok) throw new Error("Search index failed to load.");
          return response.json();
        })
        .then(function (data) {
          posts = Array.isArray(data) ? data : [];
          return posts;
        });
    }
    return indexPromise;
  }

  function searchableText(post) {
    return normalize([
      post.title,
      (post.categories || []).join(" "),
      post.content
    ].join(" "));
  }

  function excerpt(post, query) {
    var content = String(post.content || "").replace(/\s+/g, " ").trim();
    if (!content) return "";

    var lowerContent = content.toLowerCase();
    var lowerQuery = query.toLowerCase();
    var hit = lowerQuery ? lowerContent.indexOf(lowerQuery) : -1;
    var start = hit > -1 ? Math.max(0, hit - 72) : 0;
    var end = Math.min(content.length, start + 190);
    var prefix = start > 0 ? "..." : "";
    var suffix = end < content.length ? "..." : "";

    return prefix + content.slice(start, end).trim() + suffix;
  }

  function clearResults(message) {
    if (results) results.innerHTML = "";
    if (status) status.textContent = message;
  }

  function focusableInDialog() {
    if (!dialog) return [];
    return Array.prototype.slice.call(dialog.querySelectorAll([
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])'
    ].join(","))).filter(function (element) {
      return element.offsetParent !== null || element === document.activeElement;
    });
  }

  function keepFocusInside(event) {
    if (!dialog || dialog.hidden || event.key !== "Tab") return;

    var focusable = focusableInDialog();
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function renderMatches(query) {
    var trimmed = query.trim();
    if (trimmed.length < 2) {
      clearResults("Type at least two characters to search the notebook.");
      return;
    }

    var terms = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
    var matches = posts
      .map(function (post) {
        var haystack = searchableText(post);
        var score = 0;
        for (var i = 0; i < terms.length; i += 1) {
          if (haystack.indexOf(terms[i]) === -1) return null;
          if (normalize(post.title).indexOf(terms[i]) > -1) score += 8;
          if (normalize((post.categories || []).join(" ")).indexOf(terms[i]) > -1) score += 3;
          score += 1;
        }
        return { post: post, score: score };
      })
      .filter(Boolean)
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, 8);

    if (!matches.length) {
      clearResults("No matching notes found.");
      return;
    }

    status.textContent = matches.length === 1 ? "1 matching note." : matches.length + " matching notes.";
    results.innerHTML = matches.map(function (match) {
      var post = match.post;
      var categories = (post.categories || []).join(" · ");
      var snippet = excerpt(post, trimmed);

      return [
        '<li class="site-search__result">',
          '<a class="site-search__result-link" href="' + escapeHtml(post.url) + '">',
            '<span class="site-search__result-heading">',
              '<span class="site-search__result-title">' + escapeHtml(post.title) + '</span>',
              '<span class="site-search__result-date">' + escapeHtml(post.date) + '</span>',
            '</span>',
            categories ? '<span class="site-search__result-cats">' + escapeHtml(categories) + '</span>' : "",
            snippet ? '<span class="site-search__result-snippet">' + escapeHtml(snippet) + '</span>' : "",
          '</a>',
        '</li>'
      ].join("");
    }).join("");
  }

  function openSearch() {
    if (!root || !dialog || !veil) return;
    lastFocused = document.activeElement;
    root.classList.add("site-search--open");
    dialog.hidden = false;
    veil.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("is-search-open");

    loadIndex()
      .then(function () {
        clearResults("Type to search the notebook.");
        input.focus();
        renderMatches(input.value);
      })
      .catch(function () {
        clearResults("Search is unavailable right now.");
        input.focus();
      });
  }

  function closeSearch() {
    if (!root || !dialog || dialog.hidden) return;
    root.classList.remove("site-search--open");
    dialog.hidden = true;
    veil.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("is-search-open");
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function bind() {
    root = document.getElementById("site-search");
    if (!root || root.getAttribute("data-search-ready") === "true") return;

    trigger = root.querySelector(".site-search__trigger");
    dialog = root.querySelector(".site-search__dialog");
    veil = root.querySelector(".site-search__veil");
    input = root.querySelector(".site-search__input");
    status = root.querySelector(".site-search__status");
    results = root.querySelector(".site-search__results");

    if (!trigger || !dialog || !veil || !input || !status || !results) return;
    root.setAttribute("data-search-ready", "true");

    trigger.addEventListener("click", openSearch);
    root.querySelectorAll("[data-search-close]").forEach(function (button) {
      button.addEventListener("click", closeSearch);
    });
    input.addEventListener("input", function () {
      renderMatches(input.value);
    });
    results.addEventListener("click", function (event) {
      if (event.target.closest && event.target.closest("a")) closeSearch();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !dialog.hidden) closeSearch();
      keepFocusInside(event);
      if (event.key === "/" && dialog.hidden && !event.metaKey && !event.ctrlKey && !event.altKey) {
        var tag = document.activeElement && document.activeElement.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
          event.preventDefault();
          openSearch();
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", bind);
  document.addEventListener("turbo:load", bind);
})();
