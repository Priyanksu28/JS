var box = document.getElementById("box");
var h3 = document.querySelector("h3");
var btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function () {
  h3.innerHTML = "Loading...";
  h3.style.color = "red";
  setTimeout(function () {
    if (flag == 0) {
      h3.innerHTML = "Heartthrob";
      h3.style.color = "green";
      btn.innerHTML = "Click Again";
      flag = 1;
    } else {
      h3.innerHTML = "King";
      h3.style.color = "red";
      btn.innerHTML = "Click";
      flag = 0;
    }
  }, 4000);
});

btn.addEventListener("mouseover", function () {
  if (flag == 0) {
    box.style.backgroundColor = "purple";
    flag = 1;
  } else {
    box.style.backgroundColor = "white";
    flag = 0;
  }
});
