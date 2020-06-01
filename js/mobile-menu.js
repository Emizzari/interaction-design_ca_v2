function mobileMenuToggle() {
    const menu = document.querySelector(".nav__block__menu");
    const hamburger = document.querySelector(".fa-bars");
    const cross = document.querySelector(".fa-times");

    if (menu.style.right === "0px") {
        menu.style.right = "-250px"

        hamburger.style.display = "block"
        cross.style.display = "none"
    } else {
        menu.style.right = "0px"

        hamburger.style.display = "none"
        cross.style.display = "block"
    }
}