const toggleLight = e => {
    document.documentElement.setAttribute("color-mode", "light");
    console.log("hi!")
}
const toggleDark = e => {
    document.documentElement.setAttribute("color-mode", "dark");
}
const initColorMode = () => {
    document.querySelector("#toggle-light").addEventListener("click", toggleLight);
    document.querySelector("#toggle-dark").addEventListener("click", toggleDark)
}