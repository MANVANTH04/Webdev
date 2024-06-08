// counter using the setinterval function. 

let n = 0

function Counter(){
    n += 1
    console.log(n)
}

function calling(){
    return Counter()
}


setInterval(calling,1000)