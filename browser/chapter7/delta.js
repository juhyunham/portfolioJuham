document.addEventListener(`DOMContentLoaded`, () => {
    let prevScrollY = window.scrollY 
    window.addEventListener(`scroll`, () => {
        if (window.scrollY > prevScrollY) {
            console.log(`아래로 내려갔습니다.`)
        } else {
            console.log(`위로 올라갔습니다.`)
        }
        prevScrollY = window.scrollY
    })
})