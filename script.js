//Cash DOM
const css = document.querySelector('h3');
const input_Color1 = document.querySelector('.input1');
const input_Color2 = document.querySelector('.input2');
const body = document.getElementById('gradient');
const btn = document.getElementById('btn');

//rendomNumber generator
const random = () => {
  return Math.floor(Math.random() * 256);
};
//attach linear-gradient propertiesto backgrounds
const showRendomColor = () => {
  let RgbColorProperty = `linear-gradient(to right,
  rgb(${random()},${random()},${random()}),
  rgb(${random()},${random()},${random()}))`;

  body.style.background = RgbColorProperty;
  btn.style.background = RgbColorProperty;
  css.textContent = RgbColorProperty + `;`;
};
//function for input colors
const setGradient = () => {
  let RgbColorProperty = `linear-gradient(to right, ${input_Color1.value}, ${input_Color2.value})`;
  body.style.background = RgbColorProperty;
  btn.style.background = RgbColorProperty;
  css.textContent = RgbColorProperty + `;`;
};
//onload set default Gradients properties
window.onload = setGradient();
//execution main function
const main = () => {
  input_Color1.addEventListener('input', setGradient);
  input_Color2.addEventListener('input', setGradient);
  btn.addEventListener('click', showRendomColor);
};

main();

// random color function , Second Option Hex Color
// const randomColor = () => {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
