const openButton = document.getElementById("open-panel");
const closeButton = document.getElementById("close-panel");
const panel = document.getElementById("next-panel");

openButton.addEventListener("click", () => {
    panel.inert = false;
    panel.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
        panel.classList.add("is-open");
    });

    closeButton.focus();
});

closeButton.addEventListener("click", () => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    panel.inert = true;

    openButton.focus();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel.classList.contains("is-open")) {
        closeButton.click();
    }
});