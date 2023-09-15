var arrNum = new Array(10);

for (let i = 0; i < arrNum.length; i++) {
    let input = parseInt(prompt(`Insira o número ${i+1} de ${arrNum.length}`));

    arrNum[i] = new Number(input);
}

var arrValid = []; // Entre 24 e 42.
var arrInvalid = []; // Fora do range.

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i].valueOf() >= 24 && arrNum[i].valueOf() <= 42) { 
        arrValid.push(arrNum[i].valueOf());
    } else {
        arrInvalid.push(arrNum[i].valueOf()); 
    }
}
document.write("Números entre 24 e 42.<br>");
arrValid.forEach(num =>{
    document.write(`${num}<br>`)
})
document.write("Números fora do range 24 e 42.<br>");
arrInvalid.forEach(num => {
    document.write(`${num} <br>`)   
});
