var mode_btn = document.querySelector(".main-footer__btn");
var element = document.body;
mode_btn.addEventListener("click", () => {
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
    } else {
        element.classList.add("dark-mode");
    }

})
