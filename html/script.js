document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cinema-sound-in').load();
  document.getElementById('cinema-sound-out').load();
});

window.addEventListener("message", ({ data }) => {
  if (data.type !== "cinema") return;

  const {
    soundInVolume   = 1.0,
    soundOutVolume  = 1.0
  } = data;

  const { barHeight = 120 } = data;
  const topBar    = document.getElementById("topBar");
  const bottomBar = document.getElementById("bottomBar");
  const soundIn   = document.getElementById("cinema-sound-in");
  const soundOut  = document.getElementById("cinema-sound-out");

  // apply bar height
  topBar.style.height    = `${barHeight}px`;
  bottomBar.style.height = `${barHeight}px`;

  // toggles on each /cinema call
  topBar.classList.toggle("show");
  bottomBar.classList.toggle("show");

  const nowVisible = topBar.classList.contains("show");
  
  // sound fading (duration in ms)
function fadeAudio(el, fromVol, toVol, duration = 3000) {
  const start = performance.now();
  el.volume = Math.min(1, Math.max(0, fromVol));
  
  // fire and forget the play promise to avoid unhandled rejections
  el.play().catch(() => { /* muted or not ready yet */ });

  function step(ts) {
    const t = Math.min((ts - start) / duration, 1);
    // compute and clamp
    const raw = fromVol + (toVol - fromVol) * t;
    el.volume  = Math.min(1, Math.max(0, raw));

    if (t < 1) {
      requestAnimationFrame(step);
    } else if (toVol === 0) {
      el.pause();
      el.currentTime = 0;
    }
  }

  requestAnimationFrame(step);
}

  if (nowVisible) {
    // fade in the “in” sting from 0 → soundInVolume
    fadeAudio(soundIn, 0, soundInVolume, 6000);
  } else {
    // fade in “out” sting at full then fade to 0
    fadeAudio(soundOut, soundOutVolume, 0, 6000);
  }
});
