
document.querySelectorAll(`.button_wrap button`).forEach(_btn => {
    _btn.addEventListener(`click`, () => {
        if (_btn.className === `scroll_by`) {
            window.scrollBy({top: 100, left: 0, behavior: `smooth`})
        } else if (_btn.className === `scroll_to`) {
            window.scrollTo(0, 100)
        } else if (_btn.className === `scroll_into`) {
            const specialBox = document.querySelector(`.box.special`)

            specialBox.scrollIntoView({behavior: "smooth"})
        }
    })
})