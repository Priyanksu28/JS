let arr = [
  {
    img: 'Chutki_In_Chota_Bheem____Free_Transparent_Clipart_-_ClipartKey-removebg-preview.png'
  },
  {
    img: 'Download_Chhota_Bheem_Png_-_Chhota_Bheem_Images_Hd__Transparent_Png___Transparent_Png_Image_-_PNGitem-removebg-preview.png'
  },
  {
    img: 'Friday_Fun-Time____A_super_easy_Chota_Bheem_Birthday_Party_with_lots_of_FREE_printables__-removebg-preview.png'
  }
]


var btn = document.querySelector('button')

btn.addEventListener('click', function() {
  let num = Math.floor(Math.random()*arr.length)
  let png = arr[num]

  var x = Math.random() * 90
  var y = Math.random() * 90
  var rot = Math.random() * 360

  var img = document.createElement('img')
  console.log(img);
  
  img.setAttribute('src', png.img)

  img.style.height = '150px'
  img.style.position = 'absolute'
  img.style.left = x+'%'
  img.style.top = y+'%'
  img.style.rotate = rot+'deg'

  document.body.appendChild(img)
})