let button = document.querySelector('.button');
let quote = document.querySelector('.quote');
let id = document.querySelector('.id');

fetch("https://api.adviceslip.com/advice").then((result) => result.json()).then((data) =>{
        quote.innerHTML = `"${data.slip.advice}"`;
        id.innerHTML = `ADVICE #${data.slip.id}`;
    })
button.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice").then((result) => result.json()).then((data) =>{
        quote.innerHTML = `"${data.slip.advice}"`;
        id.innerHTML = `ADVICE #${data.slip.id}`;
    })
});