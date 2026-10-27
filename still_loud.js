window.addEventListener('load', () => {
        const splashScreen = document.getElementById('splashScreen');
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 1000); // Hides after 1 second
    });

// TITLE FAN: the side titles swing out to their Figma angle (±15deg)
// as the section scrolls up into the middle of the window
const titleFan = document.getElementById("titleFan");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateFan() {
    const rect = titleFan.getBoundingClientRect();
    const middle = rect.top + rect.height / 2;

    // 0 when the section enters at the bottom, 1 once it reaches the middle
    const progress = (window.innerHeight - middle) / (window.innerHeight / 2);
    const tilt = Math.min(Math.max(progress, 0), 1);

    titleFan.style.setProperty("--tilt", tilt);
}

if (!reduceMotion) {
    window.addEventListener("scroll", updateFan, { passive: true });
    window.addEventListener("resize", updateFan);
    updateFan();
}
