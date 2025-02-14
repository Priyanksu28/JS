//Generate random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color = color + hex[parseInt(Math.random() * 16)];
    }
    return color;
  };
  // console.log(randomColor());
  let change;
  document.querySelector('#start').addEventListener('click', function () {
    const startChanging = function () {
      document.body.style.backgroundColor = randomColor();
    };
    if (change == null) {
      change = setInterval(startChanging, 1000);
    }
    console.log(change);
  });
  
  document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(change);
    change = null;
  });
  