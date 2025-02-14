const but = document.querySelectorAll('.button');
const change = document.querySelector('body');

but.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      change.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      change.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      change.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      change.style.backgroundColor = 'yellow';
    }
    if (e.target.id === 'black') {
      change.style.backgroundColor = 'black';
    }
  });
});