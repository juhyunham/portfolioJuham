document.addEventListener(`DOMContentLoaded`, function() {
    //navbar sticky
    window.addEventListener(`scroll`, function() {
        if (window.scrollY > 0) {
            document.querySelector(`#navbar`).classList.add(`fixed`);
        } else {
            document.querySelector(`#navbar`).classList.remove(`fixed`);
        }
    })
})