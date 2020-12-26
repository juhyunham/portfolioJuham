document.addEventListener(`DOMContentLoaded`, function() {
    //navbar sticky
    const navbar = document.querySelector(`#navbar`);
    const navbarHeight = navbar.getBoundingClientRect().height;
    window.addEventListener(`scroll`, function() {
        if (window.scrollY > navbarHeight) {
            document.querySelector(`#navbar`).classList.add(`fixed`);
        } else {
            document.querySelector(`#navbar`).classList.remove(`fixed`);
        }
    })
})