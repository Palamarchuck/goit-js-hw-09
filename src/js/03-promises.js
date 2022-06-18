import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delayForm: document.querySelector('input[name="delay"]'),
  stepForm: document.querySelector('input[name="step"]'),
  amountForm: document.querySelector('input[name="amount"]'),
  btnCreate: document.querySelector('button'),
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
e.preventDefault();

  let firstDelay = Number(refs.delayForm.value);
  let amount = Number(refs.amountForm.value);
  let lastDelay = Number(refs.stepForm.value);
  let secondDelay = 0;
    
  let position = 0;


  for (let i = 0; i < amount; i += 1) {
    
    setTimeout(() => {
    position = i;
    secondDelay = firstDelay + lastDelay * i;
    console.log(secondDelay);
      
        createPromise(position, secondDelay,)
          .then(({ position, delay }) => {
            Notify.success(`✅ Fulfilled promise ${position += 1} in ${delay}ms`);
              })
          .catch(({ position, delay }) => {
                Notify.failure(`❌ Rejected promise ${position += 1} in ${delay}ms`);
              });

}, lastDelay);
}
  
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  
  });

  return promise;
}
