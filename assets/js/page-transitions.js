(function () {
  if (!window.Turbo) return;

  document.addEventListener("turbo:before-visit", function () {
    document.documentElement.classList.add("is-page-navigating");
  });

  document.addEventListener("turbo:load", function () {
    document.documentElement.classList.remove("is-page-navigating");
  });
})();
