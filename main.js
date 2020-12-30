document.addEventListener(`DOMContentLoaded`, function() {
    //navbar sticky
    const navbar = document.querySelector(`#navbar`);
    const navbarHeight = navbar.getBoundingClientRect().height;
    window.addEventListener(`scroll`, function() {
        if (window.scrollY > navbarHeight) {
            document.querySelector(`#navbar`).classList.add(`fixed`);
        } else {
            document.querySelector(`#navbar`).classList.remove(`fixed`);
        }
    })

    const scrollIntoView = (target) => {
        const section = document.querySelector(`#${target}`).offsetTop - navbarHeight

        window.scrollTo({
            top: section,
            left: 0,
            behavior: 'smooth'
        });
    }

    // click nav
    document.querySelectorAll(`.navbar__list .navbar__item button`).forEach(btn => {
        btn.addEventListener(`click`, function() {
            const _this = this;

            document.querySelector(`.navbar__list .navbar__item.active`).classList.remove(`active`)
            _this.parentElement.classList.add(`active`)

            const button = _this.parentElement.dataset.link 
            scrollIntoView(button)    
        })
    })

    //click contact
    document.querySelector(`.home__contact`).addEventListener(`click`, function() {
        const _this = this;

        const link = _this.dataset.link;
        scrollIntoView(link)
    })

    // home add hide class
    const home = document.querySelector(`#home`)
    const homeHeight = home.getBoundingClientRect().height
    document.addEventListener(`scroll`, () => {
        document.querySelector(`.home__container`).style.opacity = 1 - window.scrollY / homeHeight
    })

    //top move button
    document.addEventListener(`scroll`, () => {
        if (window.scrollY > homeHeight / 2 ) {
            document.querySelector(`.arrow-up`).classList.add(`show`)
        } else {
            document.querySelector(`.arrow-up`).classList.remove(`show`)
        }
    })

    document.querySelector(`.arrow-up`).addEventListener(`click`, function () {
        scrollIntoView(`home`)
    })

    //filtering
    const project = document.querySelectorAll(`.work__projects .project`);
    const projectLen = project.length;

    document.querySelector(`.work__categories button[data-name="all"] .category__count`).innerText = projectLen

    const projectCount = (target) => {
        let countArr = [];
        document.querySelectorAll(`.work__projects .project`).forEach((project, index) => {
            if (project.dataset.name === target) {
                countArr.push(index)
            } 

            document.querySelector(`.work__categories button[data-name="${target}"] .category__count`).innerText = countArr.length
        })
    }

    projectCount(`frontend`)
    projectCount(`backend`)
    projectCount(`mobile`)
    
})