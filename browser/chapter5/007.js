const target = document.querySelector(`.circle`)

document.addEventListener(`mousemove`, (e) => {
    const pageY = e.pageY
    const pageX = e.pageX

    target.querySelector(`.top`).innerText = pageY
    target.querySelector(`.left`).innerText = pageX

    target.style.top = `${pageY}px`
    target.style.left = `${pageX}px`
})
