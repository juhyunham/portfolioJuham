document.addEventListener(`DOMContentLoaded`, () => {
    window.addEventListener(`resize`, function() {
        document.querySelector(`.window_screen`).innerHTML = `window.screen: <span>${window.screen.width}</span>,<span>${window.screen.height}</span>` 
        document.querySelector(`.window_outer`).innerHTML = `window.outer: <span>${window.outerWidth}</span>,<span>${window.outerHeight}</span>` 
        document.querySelector(`.window_inner`).innerHTML = `window.inner: <span>${window.innerWidth}</span>,<span>${window.innerHeight}</span>` 
        document.querySelector(`.doc_client`).innerHTML = `documentElement.clientWidth: <span>${document.body.clientWidth}</span>,<span>${document.body.clientHeight}</span>` 
    })
})