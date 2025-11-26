window.addEventListener('pointermove', function(event) {
    var rectangle = document.querySelector('#rect')
    console.log(event);     
    var xyz = gsap.utils.mapRange(0,
      window.innerWidth, 
        rectangle.getBoundingClientRect().width, 
        window.innerWidth - (rectangle.getBoundingClientRect().width),
        event.clientX)
   gsap.to ('#rect', {
        left: xyz,
        ease: 'power3'
    })
})