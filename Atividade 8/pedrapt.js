function inicia(){
    var opcao=parseInt(prompt("Escolha sua opção:  1 - Papel | 2 - Pedra | 3 - Tesoura"));
    var resposta=Math.floor((Math.random() * 3) + 1);
    var voceescolheu = "";
    var verificador=true;

    if(resposta==1){
        voceescolheu+="Pedra";
    }
    else if(resposta==2){
        voceescolheu+="Papel";
    }
    else if(resposta==3){
        voceescolheu+="Tesoura";
    }

    if(opcao===resposta){
        alert("Empate"+voceescolheu+".");
    }else if(opcao==1 && resposta==3){
        alert("Pedra quebra tesoura."+voceescolheu+".");
    }else if(opcao==3 && resposta==2){
        alert("Tesoura corta papel."+voceescolheu+".");
    }else if(opcao==2 && resposta==1){
        alert("Papel cobre a pedra."+voceescolheu+".");
    }
}

inicia();
