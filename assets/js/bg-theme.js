(function () {
  var STORAGE_KEY = "bg-theme";
  var ALLOWED = ["emerald", "burgundy", "blue"];

  function normalizeTheme(theme) {
    if (theme === "purple") return "burgundy";
    if (theme === "forest") return "emerald";
    return theme;
  }

  function apply(theme) {
    theme = normalizeTheme(theme);
    if (ALLOWED.indexOf(theme) === -1) theme = "emerald";
    document.documentElement.setAttribute("data-bg-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    document.querySelectorAll("input.cb[data-bg-theme]").forEach(function (input) {
      var t = input.getAttribute("data-bg-theme");
      input.checked = t === theme;
    });
  }

  function init() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    apply(saved || "emerald");
    document.querySelectorAll("input.cb[data-bg-theme]").forEach(function (input) {
      input.addEventListener("change", function () {
        if (input.checked) {
          apply(input.getAttribute("data-bg-theme"));
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
