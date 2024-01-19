const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const bmi = (weight / ((height * weight) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
    console.log(results);
})