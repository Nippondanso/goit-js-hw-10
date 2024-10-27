import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');


form.addEventListener(
  "submit",
  function(event)  {
    event.preventDefault();

    const formData = new FormData(this);

    const delayValue = formData.get('delay');
    const stateValue = formData.get('state');

    console.log('Delay (ms):', delayValue);
    console.log('State:', stateValue);
  },
  false,
);
