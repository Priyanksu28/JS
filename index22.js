function outer() {
    let name = "Fish"

    function inner() {
        console.log((name));
        
    }

    return inner
}

let value = outer()
value()