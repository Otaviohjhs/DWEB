let numero1 = parseFloat(prompt("Digite o primeiro número"));
let numero2 = parseFloat(prompt("Digite o segundo número"));

let soma = numero1+numero2;
alert ("A soma dos números é: " +soma);

let sub = numero1-numero2;
alert ("A subtração do primeiro número pelo segundo é: " +sub);

let prod = numero1*numero2;
alert ("O produto dos dois números é: " +prod);

let divisao = numero1/numero2;
alert ("A divisão do primeiro número pelo segundo é: " +divisao.toFixed(2));

let resto = numero1%numero2;
alert ("O resto da divisão é: " +resto);