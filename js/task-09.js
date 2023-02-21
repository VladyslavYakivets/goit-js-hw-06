function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const textColor = document.querySelector('span');
const bodyColor = document.querySelector('body');

button.addEventListener('click', (event) => {
  const color = getRandomHexColor();
  textColor.innerHTML = color;
  bodyColor.style.backgroundColor = color
});


