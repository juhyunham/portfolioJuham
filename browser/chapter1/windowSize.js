document.addEventListener(`DOMContentLoaded`, () => {
    const windowScreen = document.querySelector(`.window_screen`)
    const windowOuter = document.querySelector(`.window_outer`)
    const windowInner = document.querySelector(`.window_inner`)
    const docClient = document.querySelector(`.doc_client`)

    function updateTag () {
        windowScreen.innerHTML = `window.screen: <span>${window.screen.width}</span>,<span>${window.screen.height}</span>` 
        windowOuter.innerHTML = `window.outer: <span>${window.outerWidth}</span>,<span>${window.outerHeight}</span>` 
        windowInner.innerHTML = `window.inner: <span>${window.innerWidth}</span>,<span>${window.innerHeight}</span>` 
        docClient.innerHTML = `documentElement.clientWidth: <span>${document.documentElement.clientWidth}</span>,<span>${document.documentElement.clientHeight}</span>` 
    }

    window.addEventListener(`resize`, () => {
        updateTag()
    })

    updateTag()
})