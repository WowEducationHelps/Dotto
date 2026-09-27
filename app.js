(function () {
  var screens = document.querySelectorAll('.screen');

  function show(id) {
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.toggle('is-active', screens[i].id === id);
    }
    var video = document.getElementById('splash-video');
    if (id !== 'splash' && video) video.pause();
    window.scrollTo(0, 0);
  }

  // Any element with data-go="screen-id" switches screens
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-go]');
    if (el) { e.preventDefault(); show(el.getAttribute('data-go')); }
    var dead = e.target.closest('[aria-disabled="true"]');
    if (dead) e.preventDefault();
  });

  // Splash: play the intro, then move on. Fallback timer covers
  // browsers that block autoplay or fail to fire "ended".
  var video = document.getElementById('splash-video');
  var moved = false;
  function leaveSplash() {
    if (moved) return;
    moved = true;
    show('welcome');
  }
  if (video) {
    video.addEventListener('ended', function () { setTimeout(leaveSplash, 350); });
    var p = video.play();
    if (p && p.catch) p.catch(function () { setTimeout(leaveSplash, 1200); });
  }
  setTimeout(leaveSplash, 4500);

  // Offline support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
})();
