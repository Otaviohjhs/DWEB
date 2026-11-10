let idades = [];
let maioridade = 1;
let menoridade = 100;
let qntpessimo = 0;
let qntotimo = 0; 
let qntbom = 0;    
let total = 0;
let totalRespondentes = 0;

for (let i = 0; i < 45; i++) {
    
    let resp = prompt(`[Pessoa ${i + 1}] Você quer responder a esse questionário? Sim(1), Não(2)`);
    
    if (resp == 2 || resp === null) {
        continue; 
    }

    let idadeuser = Number(prompt("Digite sua idade"));
    
    if (idadeuser <= 0 || idadeuser > 100) { 
        alert("Idade inválida! Essa resposta será descartada."); 
        continue; 
    }

    idades.push(idadeuser);
    total = total + idadeuser;
    totalRespondentes++; 

    if (idadeuser > maioridade) { maioridade = idadeuser; }
    if (idadeuser < menoridade) { menoridade = idadeuser; }

    let sexouser = prompt("Digite seu sexo (Masculino ou Feminino ou Outro)").toLowerCase();
    if (sexouser !== "masculino" && sexouser !== "feminino" && sexouser !== "outro") { 
        alert("Sexo inválido! Resposta registrada, mas o sexo foi ignorado."); 
    }

    let opuser = prompt("Digite sua opinião: Ótimo(4), Bom(3), Regular(2), Péssimo(1)");
    if (opuser != 4 && opuser != 3 && opuser != 2 && opuser != 1) { 
        alert("Opinião inválida!"); 
    }

    if (opuser == 4) {
        qntotimo++;
    } else if (opuser == 3) {
        qntbom++;
    } else if (opuser == 1) { 
        qntpessimo++; 
    }
}

if (totalRespondentes > 0) {
    let media = total / totalRespondentes;

    let porcOtimo = (qntotimo / totalRespondentes) * 100;
    let porcBom = (qntbom / totalRespondentes) * 100;

    alert("--- RESULTADO FINAL DOS CINESTAS ---");
    alert("Média de idade dos participantes: " + media.toFixed(1));
    alert("Idade da pessoa mais velha: " + maioridade);
    alert("Idade da pessoa mais nova: " + menoridade);
    alert("Quantidade de pessoas que acharam o filme péssimo: " + qntpessimo);
    
    alert("Porcentagem de pessoas que responderam Ótimo: " + porcOtimo.toFixed(1) + "%");
    alert("Porcentagem de pessoas que responderam Bom: " + porcBom.toFixed(1) + "%");
    
    alert("Total de pessoas que participaram: " + totalRespondentes + " de 45.");
} else {
    alert("Nenhuma das 3 pessoas quis responder ao questionário.");
}





