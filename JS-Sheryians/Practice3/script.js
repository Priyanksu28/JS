// const box = document.querySelector('#box')
// const btn = document.querySelector('button')

// btn.addEventListener('click', function() {
//     let c1 = Math.floor(Math.random() * 256)
//     let c2 = Math.floor(Math.random() * 256)
//     let c3 = Math.floor(Math.random() * 256)

//     box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
// })

let arr = [
    {
        team: 'MI',
        primary: 'blue',
        
    }, 
    {
        team: 'CSK',
        primary: 'yellow',
        
    }, 
    {
        team: 'KKR',
        primary: 'Violate',
        
    }, 
    {
        team: 'RCB',
        primary: 'green',
        
    }, 
    {
        team: 'LSG',
        primary: 'pink',
        
    }
]

let h1 = document.querySelector('h1')
let btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let num = Math.floor(Math.random()*arr.length)
    let winner = arr[num]
    h1.innerHTML = winner.team

    h1.style.backgroundColor = winner.primary
})

// var arr = [3, 4, 1, 3, 4, 6, 7]

// var obj = {}

// arr.forEach(function(val) {
//     if (obj[val] === undefined) {
//         obj[val] = 1
//     }
//     else {
//         obj[val]++
//     }
// })