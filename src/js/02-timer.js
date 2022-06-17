import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    dateTime: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    dataDays: document.querySelector('span[data-days]'),
    dataHours: document.querySelector('span[data-hours]'),
    dataMinutes: document.querySelector('span[data-minutes]'),
    dataSeconds: document.querySelector('span[data-seconds]'),
    dataTimer: document.querySelector('.timer'),
  
};

refs.dataTimer.style.display = 'flex';
refs.dataTimer.style.color = '#ff0000';
refs.dataTimer.style.color = '#ff0000';


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        finishedDate = selectedDates[0].getTime();
        if (finishedDate < currentDate) {
            clearInterval(intervalId);
            Notify.warning("Please choose a date in the future");
            return selectedDates
        }
    }
}
let intervalId = null;
const currentDate = Date.now();
let finishedDate = null;
let restOfDate = null;

flatpickr("#datetime-picker", options);

console.log(currentDate);

// refs.btnStart.setAttribute('disabled', false);

refs.btnStart.addEventListener('click', onClickStart);

function onClickStart() {
    refs.btnStart.disabled = true;
    intervalId = setInterval(() => {
        // restOfDate = finishedDate - currentDate;
        restOfDate = finishedDate - Date.now();
         if (restOfDate <= 0) {
             clearInterval(intervalId);
             return
        };
        const time = convertMs(restOfDate);
        updateTime(time);
        console.log(time);
    }, 1000);
}


function updateTime({ days, hours, minutes, seconds }) {
    refs.dataDays.textContent = days;
    refs.dataHours.textContent = hours;
    refs.dataMinutes.textContent = minutes;
    refs.dataSeconds.textContent = seconds;
}
  

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
