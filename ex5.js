function count(initial, final){
    let sum = 0
    for(i=initial ; i<=final ; i++){
        sum += i;
    }
    let numberQuantity = (final+1) - (initial-1);
    document.write(`A média dos números é igual a ${sum / numberQuantity}`)
}

let value1 = parseInt(prompt("Insira o primeiro valor: "));
let value2 = parseInt(prompt("Insira o segundo valor: "));

count(value1, value2);
