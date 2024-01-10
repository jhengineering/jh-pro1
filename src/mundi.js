//mund

const switchButton = document.getElementById('switch-button');
const mundiImage = document.getElementById('mundi').getElementsByTagName('img')[0];

switchButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    mundiImage.style.filter = 'invert(1)';
  } else {
    mundiImage.style.filter = 'none';
  }
});




