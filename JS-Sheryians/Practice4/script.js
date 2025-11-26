var btn = document.querySelector("button");
var h3 = document.querySelector("#percentage");
var progress = document.querySelector("#grow");
let growth = 0;

var randomTime = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
console.log("Download time:", randomTime + "ms");

btn.addEventListener("click", function () {
  var abc = setInterval(() => {
    growth++;
    h3.innerHTML = growth + "%";
    progress.style.width = growth + "%";
  }, randomTime/100);

  setTimeout(function () {
    clearInterval(abc);
    h3.innerHTML = '100%';
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
  }, randomTime);
});

// var randomTime = Math.random()
// console.log(randomTime);
// var ac = Math.random() * (5000 - 3000 + 1)
// console.log(ac);
// var vb = Math.random() * (5000 - 3000 + 1) + 3000
// console.log(vb);


