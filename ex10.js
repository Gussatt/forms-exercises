function criaTabuada(limite){

    for(i = 1 ; i <= limite ; i++){
        console.log(`Tabuada do ${i}`);
        for(k = 1 ; k<=10 ; k++){
            console.log(`${k} x ${i} = ${k * i}`);
        }
    }
}

criaTabuada(parseInt(prompt("Insira a última tabuada: ")));