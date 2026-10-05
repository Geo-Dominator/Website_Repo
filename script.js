// Grab the three elements we need to toggle
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

// Clicking the hamburger toggles the .open class on all three elements.
// classList.toggle() returns true if the class was added, false if removed,
// so we use that boolean to keep everything in sync.
hamburger.addEventListener("click", () => {
  const isOpen = drawer.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen); // animates bars → ✕
  overlay.classList.toggle("open", isOpen); // fades in the dark backdrop
});

// Clicking the overlay (dark backdrop) closes the menu
overlay.addEventListener("click", () => {
  drawer.classList.remove("open");
  hamburger.classList.remove("open");
  overlay.classList.remove("open");
});
const track = document.getElementById("track");
const slides = track.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
const counter = document.getElementById("counter");
const total = slides.length; // 5

let current = 0; // index of the currently visible slide (0-based)
let autoTimer; // holds the setInterval reference for auto-advance

/* ── Build dot buttons dynamically ──
      One button per slide, created in JS so we don't have to
      hard-code them in HTML. Each dot jumps to its slide on click. */
slides.forEach((_, i) => {
  const d = document.createElement("button");
  d.className = "dot" + (i === 0 ? " active" : ""); // first dot starts active
  d.setAttribute("aria-label", `Go to slide ${i + 1}`);
  d.addEventListener("click", () => goTo(i));
  dotsContainer.appendChild(d);
});

/* ── updateDots ──
      Marks the dot matching the current slide as .active
      and removes it from all others. */
function updateDots() {
  dotsContainer.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === current);
  });
}

/* ── updateCounter ──
      Updates the "01 / 05" text.
      padStart(2, '0') zero-pads single digits → "1" becomes "01". */
function updateCounter() {
  counter.textContent =
    String(current + 1).padStart(2, "0") +
    " / " +
    String(total).padStart(2, "0");
}

/* ── goTo(index) ──
      The main function that changes the visible slide.
      1. Wraps the index with modulo so it loops around (5 → 0, -1 → 4).
      2. Slides the track left by (current × 100%) using CSS transform.
      3. Syncs the dots and counter.
      4. Resets the auto-advance timer so manual navigation doesn't
         cause an immediate auto-jump. */
function goTo(index) {
  current = (index + total) % total; // wrap around
  track.style.transform = `translateX(-${current * 100}%)`;
  updateDots();
  updateCounter();
  resetAuto();
}

// Wire up the prev/next arrow buttons
document
  .getElementById("prev")
  .addEventListener("click", () => goTo(current - 1));
document
  .getElementById("next")
  .addEventListener("click", () => goTo(current + 1));

/* ── Keyboard navigation ──
      Left/right arrow keys navigate the carousel,
      making it accessible without a mouse. */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(current - 1);
  if (e.key === "ArrowRight") goTo(current + 1);
});

/* ── Touch / swipe support ──
      Records where the finger landed (touchstart) and where it
      lifted (touchend). If the horizontal distance is more than
      40px, it treats it as a swipe left or right. */
let startX = 0;
track.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
  },
  { passive: true },
); // passive: true = don't block scrolling

track.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 40) {
    goTo(current + (dx < 0 ? 1 : -1)); // swipe left → next, right → prev
  }
});

/* ── Auto-advance ──
      Moves to the next slide every 5 seconds automatically.
      resetAuto() clears the old timer and starts a fresh one,
      preventing double-firing after manual navigation. */
function resetAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goTo(current + 1), 5000);
}

// Kick off auto-advance when the page loads
resetAuto();
