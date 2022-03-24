// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener("click", getJoke);

function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => jokeDIV.textContent = data.value)
        .catch(error => jokeDIV.textContent = "Ha habido un error al solicitar la información.");
}