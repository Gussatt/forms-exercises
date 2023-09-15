function calculaMedia() {
    var nota1 = parseFloat(prompt("Insira a primeira nota do aluno: "));
    while(nota1 < 0 || nota1 > 10){
        alert("Valor inválido! Insira outro valor!")
        nota1 = parseFloat(prompt("Insira a primeira nota do aluno: "));
    }
    var nota2 = parseFloat(prompt("Insira a segunda nota do aluno: "));
    while(nota2 < 0 || nota2 > 10){
        alert("Valor inválido! Insira outro valor!")
        nota2 = parseFloat(prompt("Insira a segunda nota do aluno: "));
    }
    var nota3 = parseFloat(prompt("Insira a terceira nota do aluno: "));
    while(nota3 < 0 || nota3 > 10){
        alert("Valor inválido! Insira outro valor!")
        nota3 = parseFloat(prompt("Insira a terceira nota do aluno: "));
    }
    var nota4 = parseFloat(prompt("Insira a quarta nota do aluno: "));
    while(nota4 < 0 || nota4 > 10){
        alert("Valor inválido! Insira outro valor!")
        nota4 = parseFloat(prompt("Insira a quarta nota do aluno: "));
    }
    var nota5 = parseFloat(prompt("Insira a quinta nota do aluno: "));
    while(nota5 < 0 || nota5 > 10){
        alert("Valor inválido! Insira outro valor!")
        nota5 = parseFloat(prompt("Insira a quinta nota do aluno: "));
    }
    var nota6 = parseFloat(prompt("Insira a sexta nota do aluno: "));
    while(nota6 < 0 || nota6 > 10){
        alert("Valor inválido! Insira outro valor!")
        nota5 = parseFloat(prompt("Insira a quinta nota do aluno: "));
    }
    media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) /6;

    document.write(`Sua média é igual a ${media}`);

}

calculaMedia();
