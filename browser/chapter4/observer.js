const boxes = document.querySelectorAll(`.box`)

const option = {
    root: null,
    rootMargin: `100px`,
    threshold: 1 
}

const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`selected`)
        } else {
            entry.target.classList.remove(`selected`)
        }
    })
}, option)

boxes.forEach(box => {
    observer.observe(box)
})