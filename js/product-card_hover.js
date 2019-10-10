const productCards = document.querySelectorAll('.product-card')
const buyDialog = document.querySelector('.dialog-buy')
const confirmBtn = buyDialog.querySelector('.dialog-buy__confirm-btn')
const closeBtn = buyDialog.querySelector('.dialog-buy__close-btn')

closeBtn.addEventListener('click', e => {
  e.preventDefault()
  if (!buyDialog.classList.contains('visually-hidden')) {
    buyDialog.classList.add('visually-hidden')
  }
})

for (let i = 0; i < productCards.length; i += 1) {
  productCards[i].addEventListener('mouseover', e=> {
    productCards[i].classList.add('product-card_hover')
    const hoverEl = productCards[i].querySelector('.product-card__controls')
    const hoverElBtns = hoverEl.querySelectorAll('a')
    for (let i = 0; i < hoverElBtns.length; i += 1) {
      hoverElBtns[i].setAttribute('tabindex', '0')
    }
    hoverElBtns[0].focus()
    const elImg = productCards[i].querySelector('img')
    elImg.style.display = 'none'
    hoverEl.classList.remove('visually-hidden')
  })
  productCards[i].addEventListener('mouseleave', e => {
    productCards[i].classList.remove('product-card_hover')
    const hoverEl = productCards[i].querySelector('.product-card__controls')
    const hoverElBtns = hoverEl.querySelectorAll('a')
    const elImg = productCards[i].querySelector('img')
    for (let i = 0; i < hoverElBtns.length; i += 1) {
      hoverElBtns[i].setAttribute('tabindex', '-1')
    }
    elImg.style.display = 'block'
    hoverEl.classList.add('visually-hidden')
  })
  const productCardBuyBtn = productCards[i].querySelector('.product-card__buy-btn')
  productCardBuyBtn.addEventListener('click', e => {
    e.preventDefault()
    buyDialog.classList.remove('visually-hidden')
    confirmBtn.focus()
  })
}

// esc close listner
window.addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    if (!buyDialog.classList.contains('visually-hidden')) {
      buyDialog.classList.add('visually-hidden')
    }
  }
})

