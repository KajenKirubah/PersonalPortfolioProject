class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.mobile-menu');
        this.navBar = document.querySelector('.navbar');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        this.navBar.classList.toggle("navbar--is-open")
        this.menuIcon.classList.toggle("mobile-menu__close-x");
    }
}

export default MobileMenu;