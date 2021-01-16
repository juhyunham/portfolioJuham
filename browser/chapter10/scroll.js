document.addEventListener(`DOMContentLoaded`, () => {
    const banner = document.querySelector(`.banner`);
    const header = document.querySelector(`.header`);
    const topZone = document.querySelector(`.top_zone`);
    const section = document.querySelectorAll(`.section`);
    const menu = document.querySelectorAll(`nav li`);
    let flag = true;

    const sectionTop = [] 
    section.forEach(item => {
        sectionTop.push(item.getBoundingClientRect().top + window.scrollY)
    })
    
    window.addEventListener(`scroll`, () => {
        if (flag) {
            if (topZone.offsetHeight <= window.scrollY) {
                header.style.transform = `translateY(${banner.offsetHeight}px)`
                header.classList.add(`fixed`);
            } else {
                header.style.transform = ``
                header.classList.remove(`fixed`);
            }

            let i = 0;
            for (i = 0 ; i < section.length; i++) {
                if (sectionTop[i] - header.offsetHeight - banner.offsetHeight >= window.scrollY) {
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

                window.scrollTo({top: sectionTop[index] - header.offsetHeight - banner.offsetHeight , behavior: 'smooth' })

                setTimeout(() => {
                    flag = true
                } , 700)
            }
        })
    })
})