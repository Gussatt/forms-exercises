function calculaMedia() {
    var nota1 = parseFloat(prompt("Insira a primeira nota do aluno: "));
    var nota2 = parseFloat(prompt("Insira a segunda nota do aluno: "));
    media = (nota1 + nota2) / 2;

    if (media < 9.5) {
        alert("Você não foi aprovado");
    } else {
        alert("Você foi aprovado");
    }

    var escolha = prompt("Calcular a média de outro aluno Sim/Não").toUpperCase();
    while (escolha == "S") {
        calculaMedia();
        escolha = prompt("Calcular a média de outro aluno Sim/Não").toUpperCase;
    }
}

calculaMedia();
