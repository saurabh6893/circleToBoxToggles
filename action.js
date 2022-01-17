const boxes = document.querySelectorAll('.container')

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    removeUltra()
    box.classList.add('ultra')
  })
})

function removeUltra() {
  boxes.forEach((box) => {
    box.classList.remove('ultra')
  })
}
