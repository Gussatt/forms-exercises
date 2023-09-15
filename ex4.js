function count(){
    let sum = 0
    for(i=15 ; i<=100 ; i++){
        sum += i;
    }
    let numberQuantity = 101 - 14;
    document.write(`A média dos números é igual a ${sum / numberQuantity}`)
}

count();