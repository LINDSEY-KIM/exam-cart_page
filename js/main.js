const arr = [
    {index : 0, price : 70000, product : 'Narciso rodriguez'},
    {index : 1, price : 90000, product : "Twilly d' Hermes"},
    {index : 2, price : 80000, product : 'Pine forest scrub'}
]

const h5El = document.querySelectorAll('h5');
const pEl = document.querySelectorAll('p');
const btnEl = document.querySelector('button');

for (let i = 0; i < arr.length; i++){
    h5El[i].innerHTML = arr[i].product;
    pEl[i].innerHTML = `price : ${arr[i].price}`;
}
