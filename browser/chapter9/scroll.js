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
    let headerHeight = document.querySelector(`.header`).offsetHeight; 
    let sectionTop = [];

    for (let i = 0; i < sections.length; i++) {
        sectionTop.push(sections[i].getBoundingClientRect().top + window.scrollY)
    }

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
    }

    window.addEventListener(`scroll`, () => {
        sectionTopFun()
    });

    menu.forEach(item => {
        item.addEventListener(`click`, function() {
            const _this = this;
            const _thisTop =  sectionTop[_this.dataset.menu] - headerHeight;

            window.scrollTo({top:  _thisTop,  behavior: 'smooth'});
        })
    })
})