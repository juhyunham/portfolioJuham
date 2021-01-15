document.addEventListener(`DOMContentLoaded`, () => {
    let prevScroll = window.scrollY

    const scrollDelta = () => {
        if (window.scrollY > prevScroll) {
            console.log(`내려갔습니다.`, window.scrollY - prevScroll)
        } else {
            console.log(`올라왔습니다.`, window.scrollY - prevScroll)
        }

        prevScroll = window.scrollY;
    } 

    const sections = document.querySelectorAll(`.section`)
    const menu = document.querySelectorAll(`.header li`);
    const header = document.querySelector(`.header`)
    let headerHeight = header.offsetHeight; 
    let sectionTop = [];
    let flag = false;

    for (let i = 0; i < sections.length; i++) {
        sectionTop.push(sections[i].getBoundingClientRect().top + window.scrollY)
    }

    header.classList.add(`invisible`)

    const sectionTopFun = () => {
        let temp = 0;
        for (let i = 0; i < sectionTop.length; i++) {
            if (sectionTop[i] - headerHeight <= window.scrollY)  {
                temp = i;
            }
        }

        if (document.querySelector(`.header li.active`) !== null) {
            document.querySelector(`.header li.active`).classList.remove(`active`)
        }
        
        menu[temp].classList.add(`active`)

        if (sectionTop[temp] < window.scrollY) {
            header.classList.remove(`invisible`)
        } 

        if ( sectionTop[0] > window.scrollY ) {
            header.classList.add(`invisible`)
        }
    }

    window.addEventListener(`scroll`, () => {
        if (flag === false) {
            sectionTopFun()
            console.log(`scroll`)
        }
    });

    menu.forEach(item => {
        item.addEventListener(`click`, function() {
            if (flag === false) {
                flag = true;
                const _this = this;

                const _thisTop =  sectionTop[_this.dataset.menu];

                if (document.querySelector(`.header li.active`) !== null) {
                    document.querySelector(`.header li.active`).classList.remove(`active`)
                }

                _this.classList.add(`active`)

                window.scrollTo({top:  _thisTop - headerHeight,  behavior: 'smooth'})

                setTimeout(function() {
                    flag = false;
                } , 700) 
            }
        })
    })
})