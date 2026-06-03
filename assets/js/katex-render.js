(function () {
  var DELIMITERS = [
    { left: "$$", right: "$$", display: true },
    { left: "\\[", right: "\\]", display: true },
    { left: "$", right: "$", display: false },
    { left: "\\(", right: "\\)", display: false },
  ];

  function renderMath() {
    if (!window.renderMathInElement) return;

    var root = document.querySelector("main.page-content");
    if (!root) return;

    renderMathInElement(root, {
      delimiters: DELIMITERS,
      throwOnError: false,
    });
  }

  function onReady() {
    renderMath();
  }

  if (window.Turbo) {
    document.addEventListener("turbo:load", onReady);
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
