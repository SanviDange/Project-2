// LIGHT MODE TOGGLE: the flickering dot in the header switches the page
// between dark (black + blobs) and light (white, no blobs).
// Every page opens in dark mode; light mode lasts until you leave the page.

const lightToggle = document.querySelector(".becoming-light");

function setLightMode(isLight) {
    document.documentElement.classList.toggle("light-mode", isLight);

    lightToggle.setAttribute("aria-pressed", isLight);
    lightToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");

    // Pause the p5 blob sketch while it's hidden; restart it when dark again
    if (typeof noLoop === "function") {
        isLight ? noLoop() : loop();
    }
}

lightToggle.addEventListener("click", () => {
    setLightMode(!document.documentElement.classList.contains("light-mode"));
});

// Always start dark, including when coming back with the browser's Back button
window.addEventListener("pageshow", () => setLightMode(false));
