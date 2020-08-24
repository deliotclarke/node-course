const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = search.value;
  fetch(`http://localhost:3000/weather?address=${userInput}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message, data.error);
      } else {
        console.log(data.location, data.forecast);
      }
    });
});
