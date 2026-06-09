(function () {
  var indicator = null;
  var meter = null;
  var percent = null;
  var ticking = false;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getScrollProgress() {
    var doc = document.documentElement;
    var scrollable = Math.max(0, doc.scrollHeight - doc.clientHeight);
    if (scrollable === 0) return 1;
    return clamp((window.scrollY || doc.scrollTop || 0) / scrollable, 0, 1);
  }

  function update() {
    ticking = false;
    if (!indicator || !meter) return;

    var progress = getScrollProgress();
    var height = progress * 64;
    var percentValue = Math.round(progress * 100);
    meter.setAttribute("y", (64 - height).toFixed(2));
    meter.setAttribute("height", height.toFixed(2));
    if (percent) {
      percent.textContent = percentValue + "%";
    }
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function init() {
    indicator = document.getElementById("scroll-brain");
    meter = indicator ? indicator.querySelector(".scroll-brain__meter") : null;
    percent = indicator ? indicator.querySelector(".scroll-brain__percent") : null;
    requestUpdate();
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("turbo:load", init);
})();
