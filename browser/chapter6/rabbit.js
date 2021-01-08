const button = document.querySelector(`.btn`)
const rabbit = document.querySelector(`.rabbit`)

document.querySelector(`.btn`).addEventListener(`click`, function() {
    const rabbitTop = rabbit.getBoundingClientRect().top

    window.scrollTo({top: rabbitTop, behavior: 'smooth'});
})