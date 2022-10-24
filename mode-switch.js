var mode_btn = document.querySelector(".main-footer__btn");
var light = "Light";
var dark = "Dark";
var element = document.body;
mode_btn.addEventListener("click", () => {
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        mode_btn.innerHTML = light;
    } else {
        element.classList.add("dark-mode");
        mode_btn.innerHTML = dark;
    }

})
