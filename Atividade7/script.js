let escolhausuario = prompt("Escolha: pedra, papel ou tesoura");
if (escolhausuario != "pedra" && escolhausuario != "papel" && escolhausuario != "tesoura")
{alert ("Escolha inválida. Digite pedra, papel ou tesoura")};

let numaleatorio = Math.random(); 
let escolhacomp;

if (numaleatorio < 0.34){
    escolhacomp = "pedra";
}
else if (numaleatorio < 0.65){
    escolhacomp = "papel";
}
else {
    escolhacomp = "tesoura";
}

alert("Jogador: "+escolhausuario);
alert("Computador: "+escolhacomp);

if (escolhausuario === escolhacomp){
    alert("Empate.");
}
else if ((escolhausuario === "pedra" && escolhacomp === "papel" )|| 
(escolhausuario === "papel" && escolhacomp === "tesoura" ) ||
(escolhausuario === "tesoura" && escolhacomp === "pedra" ))
{
    alert("Computador venceu!");
}
else{
    alert("Jogador venceu!");
}