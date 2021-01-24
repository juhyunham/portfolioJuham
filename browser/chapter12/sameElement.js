const button = document.querySelector(`.button`)
const box = document.querySelector(`.box`)
let count = 0;
let flag = true;

button.addEventListener(`click`, function () {
    const _this = this;

    count++

    const showBox = () => {
        box.style.visibility = `hidden`;
        box.style.display = `block`;

        console.log(`안`,count)

        _this.parentElement.querySelector(`.box`).classList.toggle(`selected`)
        box.style.left = `${_this.getBoundingClientRect().right + window.scrollX - box.offsetWidth}px`

        box.style.visibility = ``;
        box.style.display = ``;
    }

    showBox()
    
    if (count > 10) {
        if (flag === true) {
            flag = false
            window.addEventListener(`resize`, showBox)
        }
    }
})
