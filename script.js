const $cards = document.getElementsByClassName('card')
document.getElementById('cards').onmousemove = (e) => {
  for (const card of $cards) {
    const rect = card.getBoundingClientRect(),
    offsetX = e.clientX - rect.left,
    offsetY = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${offsetX}px`)
    card.style.setProperty('--mouse-y', `${offsetY}px`)
  }
}