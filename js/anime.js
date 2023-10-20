// anime.js
anime.timeline({loop: true})
  .add({
    targets: '#text-container .letter',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70 * i
  }).add({
    targets: '#text-container',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
