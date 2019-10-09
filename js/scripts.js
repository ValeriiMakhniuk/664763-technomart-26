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

console.log(contactsModalForm)

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
})

//submit form
contactsModalForm.addEventListener('submit', e => {
  if (!contactsModalName.value || !contactsModalMail.value || !contactsModalMessage.value) {
    e.preventDefault()
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
    }
  }
})
