if (!document.querySelector('#catalog')) {
  const acco = document.querySelector('.services__accordeon')

  acco.addEventListener('click', e => {
    const active = acco.querySelector('[aria-expanded="true"]')
    const target = e.target
    const isExpanded = target.getAttribute('aria-expanded') === 'true'
    if (target.classList.contains('services__accordeon-item-trigger')) {
      if (active && target !== active) {
        active.setAttribute('aria-expanded', 'false')
        document.getElementById(active.getAttribute('aria-controls')).setAttribute('hidden', '')
        active.removeAttribute('aria-disabled')
      }

      if (!isExpanded) {
        target.setAttribute('aria-expanded', 'true')
        document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden')
        target.setAttribute('aria-disabled', 'true')

      } else if (!target.getAttribute('aria-disabled') === 'true') {
        target.setAttribute('aria-expanded', 'false')
        document.getElementById(target.getAttribute('aria-controls')).setAttribute('hidden', '')
      }
      e.preventDefault()
    }
  });
  const contactsModalBtn = document.querySelector('.about__contacts-btn')
  const contactsModal = document.querySelector('.about__contacts-dialog')
  const contactsModalCloseBtn = contactsModal.querySelector('.contacts__dialog-btn-close')
  const contactsModalSubmitBtn = contactsModal.querySelector('[type=\'submit\']')
  const contactsModalForm = contactsModal.querySelector('form')
  const contactsModalName = contactsModal.querySelector('[name = name]')
  const contactsModalMail = contactsModal.querySelector('[name = email]')
  const contactsModalMessage = contactsModal.querySelector('textarea')
  let isStorageSupport = true
  let storageName = ''
  let storageEmail = ''

  try {
    storageName = localStorage.getItem('name')
    storageEmail = localStorage.getItem('email')
  } catch (err) {
    isStorageSupport = false
  }

  // open dialog
  contactsModalBtn.addEventListener('click', e => {
    e.preventDefault()
    contactsModal.classList.remove('visually-hidden')
    contactsModal.classList.add('about__contacts-dialog_animate')
    contactsModalName.focus()
    if (storageName) {
      if (storageEmail) {
        contactsModalMail.value = storageEmail
        contactsModalMessage.focus()
      } else {
        contactsModalMail.focus()
      }
      contactsModalName.value = storageName
    }
  })

  // close modal
  contactsModalCloseBtn.addEventListener('click', e => {
    e.preventDefault()
    contactsModal.classList.add('visually-hidden')
    contactsModal.classList.remove('about__contacts-dialog_animate')
    contactsModal.classList.remove('about__contacts-dialog_animate_error')
  })

  //submit form
  contactsModalForm.addEventListener('submit', e => {
    if (!contactsModalName.value || !contactsModalMail.value || !contactsModalMessage.value) {
      e.preventDefault()
      contactsModal.classList.add('about__contacts-dialog_animate_error')
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', contactsModalName.value)
        localStorage.setItem('email', contactsModalMail.value)
      }
    }
  })

  // esc close listner
  window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      if (!contactsModal.classList.contains('visually-hidden')) {
        e.preventDefault()
        contactsModal.classList.add('visually-hidden')
        contactsModal.classList.remove('about__contacts-dialog_animate')
        contactsModal.classList.remove('about__contacts-dialog_animate_error')
      }
    }
  })
  const mapTrigger = document.querySelector('.about__contacts-map')
  const map = document.querySelector('.dialog-map')
  const mapCloseBtn = map.querySelector('.dialog-map__close-btn')

  mapTrigger.addEventListener('click', e => {
    e.preventDefault()
    map.classList.remove('visually-hidden')
    mapCloseBtn.focus()
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
}

const productCards = document.querySelectorAll('.product-card')
const buyDialog = document.querySelector('.dialog-buy')
const confirmBtn = buyDialog.querySelector('.dialog-buy__confirm-btn')
const closeBtn = buyDialog.querySelector('.dialog-buy__close-btn')

for (let i = 0; i < productCards.length; i += 1) {
  const productCardBuyBtn = productCards[i].querySelector('.product-card__buy-btn')
  productCardBuyBtn.addEventListener('click', e => {
    e.preventDefault()
    buyDialog.classList.remove('visually-hidden')
    confirmBtn.focus()
  })
}

closeBtn.addEventListener('click', e => {
  e.preventDefault()
  if (!buyDialog.classList.contains('visually-hidden')) {
    buyDialog.classList.add('visually-hidden')
  }
})
// esc close listner
window.addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    if (!buyDialog.classList.contains('visually-hidden')) {
      buyDialog.classList.add('visually-hidden')
    }
  }
})

