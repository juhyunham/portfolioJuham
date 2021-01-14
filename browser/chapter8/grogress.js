document.addEventListener(`DOMContentLoaded`, () => {
    const scrollbar = document.querySelector(`.scroll_box span`)
    const scrollwrap = document.querySelector(`.scroll_wrap`)
    const ul = scrollwrap.querySelector(`ul`)
    const li = ul.querySelector(`li:first-child`)

    ul.addEventListener(`scroll`, () => {
        scrollbar.style.width = `${(-li.getBoundingClientRect().left / (ul.scrollWidth - window.innerWidth)) * 100}%`
    })

})