const boxes = document.querySelectorAll(`.box`)

const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`selected`)
        } else {
            entry.target.classList.remove(`selected`)
        }
    })
})

boxes.forEach(box => {
    observer.observe(box)
})