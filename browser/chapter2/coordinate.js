document.querySelector(`.box.special`).addEventListener(`click`, (e) => {
    console.log(e.target.getBoundingClientRect())
    // window에서 보이는 영역까지 
    console.log(`client: ${e.clientX}, ${e.clientY}`)
    // 안보이는 영역까지 포함
    console.log(`page: ${e.pageX}, ${e.pageY}`)
})