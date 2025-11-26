// let h1 = document.querySelector('h1')
// h1.innerHTML = 'Hello, Sheryians!'
// h1.style.color = 'blue';
// h1.style.backgroundColor = 'lightgray';




// h1.addEventListener('click', function() {
//     h1.innerHTML = 'Hello, Sheryians!'
//     h1.style.color = 'blue';
//     h1.style.backgroundColor = 'lightgray';
//     h1.style.fontSize = '50px'
// })




// let box = document.getElementById('box')
// box.addEventListener('click', function() {
//     box.style.backgroundColor = 'lightblue'
//     box.innerHTML = 'Hello'
// })




// let h1 = document.querySelectorAll('h1')
// h1[2].innerHTML = 'Hello, Sheryians!'
// console.log(h1[0]);


function changeBox() {
    box.innerHTML = 'Hello, Sheryians!'
    box.style.backgroundColor = 'lightblue'
}
var btn = document.querySelector('button')
let box = document.getElementById('box')
btn.addEventListener('click', changeBox)


