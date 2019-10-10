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
