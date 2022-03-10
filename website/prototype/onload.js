let html = document.documentElement;
html.setAttribute("js", true);
document.querySelectorAll(".js-disabled-hide").forEach(el => {
    el.classList.remove("js-disabled-hide");
})
console.log("javascript is on!")
initColorMode();