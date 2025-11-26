var rect = document.querySelector('#center')

// if (rect) {
//   rect.addEventListener('mousemove', function(event) {
//     console.log('Mouse moved at:', event.clientX, event.clientY);
//   })
//   rect.addEventListener('pointermove', function(event) {
//     console.log('Pointer moved at:', event.clientX, event.clientY);
//   })
// } else {
//   console.error('Element #center not found');
// }

rect.addEventListener('pointermove', function(event) {
    let rectanglelocation = rect.getBoundingClientRect()   // It gives me the rectangle location and position and details
    console.log(event.clientX);
    console.log(rectanglelocation.left);
    
    let position = event.clientX - rectanglelocation.left  // It gives the position of the mouse in the rectangle

    if (position < rectanglelocation.width/2) {     //It checks whether my mouse is in the left side or right side of the rectangle
      var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, position)
      gsap.to(rect, {
        backgroundColor: `rgb(${redcolor}, 0, 0)`,
        ease: "power3"
      })

    }
    else {
      var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, position)
      gsap.to(rect, {
        backgroundColor: `rgb(0, 0 , ${bluecolor})`,
        ease: "power3"
      })
      
    }
})

rect.addEventListener('mouseleave', function() {
  gsap.to(rect, {
    backgroundColor: "white"
  }
  )
})
