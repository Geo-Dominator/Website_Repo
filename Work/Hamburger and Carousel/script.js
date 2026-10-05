const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
});

const track = document.getElementById('track');
const slides = track.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
const counter = document.getElementById('counter');
const total = slides.length;

let current = 0;
let autoTimer;

slides.forEach((_,i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? 'active' : '');
    d.setAttribute('aria-label', `Go to slide ${i+1}`);
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
});

function updateDots(){
    dotsContainer.querySelectorAll('.dot').forEach((d,i) => {
        d.classList.toggle('active', i === current);
    });
}

function updateCounter(){
    counter.textContent = String(current + 1).padStart(2,'0') + '/' + String(total).padStart(2, '0');
}

function goTo(index){
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
    updateCounter();
    resetAuto();
}

document.getElementById('prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('next').addEventListener('click', () => goTo(current + 1));

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goTo(current -1);
    if (e.key === 'ArrowRight') goTo(current +1);
});

function resetAuto(){
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current +1), 5000);
}

resetAuto();