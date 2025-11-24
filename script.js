// script.js (final)

/* Utility selectors */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* Video playlist (homepage only) */
(function initVideo() {
  const player = document.getElementById('video-player');
  if (!player) return;
  const playlist = ['videos/vid1.mp4','videos/vid2.mp4','videos/vid3.mp4'];
  let idx = 0;
  function next() {
    player.src = playlist[idx];
    player.play().catch(()=>{});
    idx = (idx + 1) % playlist.length;
  }
  player.addEventListener('ended', next);
  next();
})();

/* Rotating reviews */
(function initReviews() {
  const el = document.getElementById('review-text');
  if (!el) return;
  const reviews = [
    'Exceptional dresses and service!',
    'Loved the variety of designs!',
    'Affordable and high quality!',
    'Highly recommend Soniya Rental Dresses!'
  ];
  let i = 0;
  function show() {
    el.textContent = reviews[i];
    i = (i + 1) % reviews.length;
  }
  show();
  setInterval(show, 3000);
})();

/* Preload some gallery images (optional) */
(function preload() {
  const imgs = ['images/gallery/img1.jpg','images/gallery/img2.jpg','images/gallery/img3.jpg'];
  imgs.forEach(src => {
    const i = new Image();
    i.src = src;
  });
})();





