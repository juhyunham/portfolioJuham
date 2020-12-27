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

    // click nav
    document.querySelectorAll(`.navbar__list .navbar__item button`).forEach(btn => {
        btn.addEventListener(`click`, function() {
            const _this = this;

            document.querySelector(`.navbar__list .navbar__item.active`).classList.remove(`active`)
            _this.parentElement.classList.add(`active`)

            const button = _this.parentElement.dataset.link 
            const section = document.querySelector(`#${button}`)
            
            section.scrollIntoView({behavior: "smooth"});
            
        })
    })
})