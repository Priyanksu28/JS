// Throttling:- To reduce the number of execution of a particular code
//Here we will reduce the number of execution of function when the mouse moves.

const btn=document.querySelector("#throttle") ;
const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date() .getTime();
    if(now - prev> delay){
      prev = now;
      return func( ... args);
    }
  }
}
document.querySelector('#rect').addEventListener("pointermove", throttleFunction((dets)=>{
  var div = document.createElement('div')
  div.classList.add('imagediv')
  div.style.left = dets.clientX+'px'
  div.style.top = dets.clientY+'px'

  var img = document.createElement('img')
  img.setAttribute('src', 'https://images.unsplash.com/photo-1763620077359-b16097b07bd3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  div.appendChild(img)

  document.body.appendChild(div)

  gsap.to(img, {
    y: '0',
    ease: Power1,
    duration: .4
  })
  
  gsap.to(img, {
    y: '100%',
    delay: .6,
    ease: Power1,
    duration: .3
  })

  setTimeout(() => {
    div.remove()
  }, 1000);
},500));

