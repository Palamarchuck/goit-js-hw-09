
const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  btn: document.querySelector('button')
}
let timerId = null;


refs.btnStart.addEventListener('click', () => {
   timerId = setInterval(() => {
     document.body.style.backgroundColor = getRandomHexColor();
   }
     , 500);
  refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute('disabled');
}
 );


refs.btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);

  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
}
);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




