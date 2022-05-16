function fatorial(n){
    let fat = 1

    for(var c = n; c > 1; c--) fat *= c

    return fat
}

console.log(fatorial(5))

// 5! = 5 * 4 * 3 * 2 * 1 = 120

function fator(x){
    if(x == 1) return 1
    else return x * fator(x-1)
}

console.log(fator(5))