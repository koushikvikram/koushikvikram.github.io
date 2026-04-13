(function () {
  var STORAGE_KEY = "bg-theme";
  var ALLOWED = ["blue", "purple", "forest"];

  function apply(theme) {
    if (ALLOWED.indexOf(theme) === -1) theme = "blue";
    document.documentElement.setAttribute("data-bg-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    document.querySelectorAll(".bg-theme-toggle__btn[data-bg-theme]").forEach(function (btn) {
      var t = btn.getAttribute("data-bg-theme");
      btn.setAttribute("aria-pressed", t === theme ? "true" : "false");
    });
  }

  function init() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    apply(saved || "blue");
    document.querySelectorAll(".bg-theme-toggle__btn[data-bg-theme]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-bg-theme"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
