(function () {
  var STORAGE_KEY = "bg-theme";
  var ALLOWED = ["blue", "emerald", "burgundy", "music"];

  function normalizeTheme(theme) {
    if (theme === "purple") return "burgundy";
    if (theme === "forest") return "emerald";
    if (theme === "earth") return "music";
    return theme;
  }

  function apply(theme) {
    theme = normalizeTheme(theme);
    if (ALLOWED.indexOf(theme) === -1) theme = "blue";
    document.documentElement.setAttribute("data-bg-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    document.querySelectorAll("input.cb[data-bg-theme]").forEach(function (input) {
      var t = input.getAttribute("data-bg-theme");
      input.checked = t === theme;
    });
  }

  function syncFromStorage() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    apply(saved || "blue");
  }

  document.addEventListener("change", function (e) {
    var el = e.target;
    if (!el.matches || !el.matches("input.cb[data-bg-theme]")) return;
    if (el.checked) {
      apply(el.getAttribute("data-bg-theme"));
    }
  });

  document.addEventListener("DOMContentLoaded", syncFromStorage);
  document.addEventListener("turbo:load", syncFromStorage);
})();
