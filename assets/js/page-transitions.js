(function () {
  if (!window.Turbo) return;

  var willEnterAfterVisit = false;

  document.addEventListener("turbo:before-visit", function () {
    willEnterAfterVisit = true;
    document.documentElement.classList.add("is-page-navigating");
  });

  document.addEventListener("turbo:load", function () {
    document.documentElement.classList.remove("is-page-navigating");

    var main = document.querySelector("main.page-content");
    if (!main || !willEnterAfterVisit) {
      return;
    }

    willEnterAfterVisit = false;

    main.classList.remove("page-content--enter");
    void main.offsetWidth;
    main.classList.add("page-content--enter");
  });
})();
