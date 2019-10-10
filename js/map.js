const mapTrigger = document.querySelector('.about__contacts-map')
const map = document.querySelector('.dialog-map')
const mapCloseBtn = map.querySelector('.dialog-map__close-btn')

mapTrigger.addEventListener('click', e => {
  e.preventDefault()
  map.classList.remove('visually-hidden')
})

mapCloseBtn.addEventListener('click', e => {
  e.preventDefault()
  if (!map.classList.contains('visually-hidden')) {
    map.classList.add('visually-hidden')
  }
})

window.addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    if (!map.classList.contains('visually-hidden')) {
      map.classList.add('visually-hidden')
    }
  }
})
