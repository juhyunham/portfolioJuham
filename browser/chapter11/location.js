const windowWidth = window.innerWidth;
const wrap = document.querySelector(`.wrap`)
const list = document.querySelector(`.list`)
const btn = document.querySelectorAll(`.btn`)
let width_sum = 0;

list.querySelectorAll(`li`).forEach(item => {
    width_sum += item.offsetWidth;
})
list.style.width = `${width_sum}px`

btn.forEach((_btn, index) => {
    _btn.addEventListener(`click`, function() {
        const _this = this

        list.style.transform = `translateX(-${(_this.getBoundingClientRect().left + window.scrollX + _this.offsetWidth) - windowWidth /2}px)`
    })
})