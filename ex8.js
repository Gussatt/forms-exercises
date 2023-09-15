var n = parseInt(prompt("Insira um valor inteiro maior que 0: "));
while(n < 0){
    alert("Insira um número inteiro maior que 0;")
    n = parseInt(prompt("Insira um valor inteiro maior que 0: "));
}
for(let i = 1 ; i <= n ; i++){
    document.write(i + "<br>");
}