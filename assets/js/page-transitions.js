(function () {
  /**
   * Keep is-page-navigating until the same frame we attach page-content--enter.
   * Removing it earlier lets main hit opacity:1 for a frame before the keyframes run — reads as a shake/flash.
   */
  function runEnter(main) {
    if (!main) return;
    main.classList.remove("page-content--enter");
    void main.offsetWidth;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.documentElement.classList.remove("is-page-navigating");
        main.classList.add("page-content--enter");
      });
    });
  }

  function onPageReady() {
    runEnter(document.querySelector("main.page-content"));
  }

  if (window.Turbo) {
    document.addEventListener("turbo:before-visit", function () {
      document.documentElement.classList.add("is-page-navigating");
    });
    document.addEventListener("turbo:load", onPageReady);
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onPageReady);
  } else {
    onPageReady();
  }
})();
