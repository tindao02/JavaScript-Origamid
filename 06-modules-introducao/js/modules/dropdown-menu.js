import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropdownMenu = document.querySelectorAll('[data-dropdown]');

    dropdownMenu.forEach(menu => {
        ['touchstart', 'click', 'mouseover'].forEach(useEvent => {
            menu.addEventListener(useEvent, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    }
}