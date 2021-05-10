document.addEventListener(`DOMContentLoaded`, function() {
    //navbar sticky
    const navbar = document.querySelector(`#navbar`);
    let navbarHeight = navbar.getBoundingClientRect().height;
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
            navbarHeight = navbar.getBoundingClientRect().height;

            if (document.querySelector(`.navbar__list .navbar__item.active`) !== null) {
                document.querySelector(`.navbar__list .navbar__item.active`).classList.remove(`active`)
            }
            _this.parentElement.classList.add(`active`)

            const button = _this.parentElement.dataset.link 
            scrollIntoView(button)    
        })
    })

    //nav toggle button for small screen
    const navToggleBtn = document.querySelector(`.navbar__toggle-btn`);
    const navMenu = document.querySelector(`.navbar__menu`);

    navToggleBtn.addEventListener(`click`, function() {
        const _this = this;

        if (_this.querySelector(`i`).classList.contains(`fa-bars`)) {
            _this.querySelector(`i`).className = `fas fa-times`
        } else {
            _this.querySelector(`i`).className = `fas fa-bars`
        }

        navMenu.classList.toggle(`open`);
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

    document.querySelector(`.work__categories button[data-filter="all"] .category__count`).innerText = projectLen

    const projectCount = (target) => {
        let countArr = [];
        document.querySelectorAll(`.work__projects .project`).forEach((_project, _index) => {
            if (_project.dataset.type === target) {
                countArr.push(_index)
            } 

            document.querySelector(`.work__categories button[data-filter="${target}"] .category__count`).innerText = countArr.length
        })
    }

    projectCount(`frontend`)
    projectCount(`backend`)
    projectCount(`mobile`)

    let _prevBtn;
    document.querySelectorAll(`.work__categories .category__btn`).forEach(_btn => {
        _btn.addEventListener(`click`, function() {
            const _this = this
            document.querySelector(`.work__categories .category__btn.active`).classList.remove(`active`)
            _this.classList.add(`active`)

            if (_this !== _prevBtn) {
                document.querySelector(`.work__projects`).classList.add(`work__animation`)
            }
    
            document.querySelectorAll(`.work__projects .project`).forEach((_project, _index) => {
                if (_this.dataset.filter === `all` || _this.dataset.filter === _project.dataset.type) {
                    _project.classList.remove(`invisible`)
                } else {
                    _project.classList.add(`invisible`)
                }
            })

            let animationDelay;
            clearTimeout(animationDelay)
            animationDelay = setTimeout(() => {
                document.querySelector(`.work__projects`).classList.remove(`work__animation`)
            }, 300)

            _prevBtn = _this
        })
    })

    const sectionIds = [
        'home',
        'about',
        'skills',
        'work',
        'contact'
    ]

    const sections = sectionIds.map(id => document.querySelector(`#${id}`));
    const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`))

    let selectedNavItem = navItems[0];
    let selectedNavIndex = 0;
    const selectNavItem = (selected) => {
        if (selectedNavItem.classList.contains(`active`) !== null) {
            selectedNavItem.classList.remove(`active`);
        }

        selectedNavItem = navItems[selectedNavIndex];
        selectedNavItem.classList.add(`active`)
    }

    const observerOptions = {
        root: null,
        rootMargin: `0px`,
        threshold: 0.3
    }

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && entry.intersectionRatio > 0) {
                const index = sectionIds.indexOf(`${entry.target.id}`)
                
                if (entry.boundingClientRect.y <= 0) {
                    selectedNavIndex = index + 1
                } else {
                    selectedNavIndex = index - 1
                }
            }
        })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section))

    window.addEventListener(`scroll`, () => {
        if (window.scrollY === 0) {
            selectedNavIndex = 0
        } else if (window.scrollY + window.innerHeight === document.body.clientHeight) {
            selectedNavIndex = navItems.length - 1
        }

        selectNavItem(navItems[selectedNavIndex])
    })
})