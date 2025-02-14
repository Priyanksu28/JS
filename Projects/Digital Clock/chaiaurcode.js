const clock = document.querySelector('#clock');

// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleString(); //It gives both date and time
  // clock.innerHTML = date.toLocaleDateString(); It gives only date
  // clock.innerHTML = date.toLocaleTimeString(); It gives only time
}, 1000);
