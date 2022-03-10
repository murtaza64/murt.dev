const toggleLight = e => {
    html.setAttribute("color-mode", "light");
}
const toggleDark = e => {
    html.setAttribute("color-mode", "dark");
}
const initColorMode = () => {
    if (window.matchMedia("prefers-color-scheme: dark")) {
        html.setAttribute("color-mode", "dark");
    } else {
        html.setAttribute("color-mode", "dark");
    }
    document.querySelector("#toggle-light").addEventListener("click", toggleLight);
    document.querySelector("#toggle-dark").addEventListener("click", toggleDark)
}