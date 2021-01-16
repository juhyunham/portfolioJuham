document.addEventListener(`DOMContentLoaded`, () => {
    const section = document.querySelectorAll(`.section`)
    const header = document.querySelector(`.header`);
    const menu = document.querySelectorAll(`nav li`)
    let flag = true;

    const sectionTop = [] 
    section.forEach(item => {
        sectionTop.push(item.getBoundingClientRect().top + window.scrollY - header.offsetHeight)
    })
    
    window.addEventListener(`scroll`, () => {
        if (flag) {
            header.classList.add(`fixed`);

            let i = 0;
            for (i = 0 ; i < section.length; i++) {
                if (sectionTop[i] >= window.scrollY) {
                    break;
                }
            }

            if (document.querySelector(`.header nav li.active`) !== null ) {
                document.querySelector(`.header nav li.active`).classList.remove(`active`)
            }

            if (i !== 0) {
                menu[i - 1].classList.add(`active`)
            }
        }
    })

    menu.forEach(item => {
        item.addEventListener(`click`, function() {
            if (flag) {
                flag = false
                const _this = this
            
                const index = Array.from(_this.parentElement.children).indexOf(_this)

                if (document.querySelector(`.header nav li.active`) !== null ) {
                    document.querySelector(`.header nav li.active`).classList.remove(`active`)
                }

                _this.classList.add(`active`)

                window.scrollTo({top: sectionTop[index] - header.offsetHeight , behavior: 'smooth' })

                setTimeout(() => {
                    flag = true
                } , 600)
            }
        })
    })
})