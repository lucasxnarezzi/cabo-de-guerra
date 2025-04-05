// criar lista com 3 jogadores
personagem = ["jogador1", "jogador2", "jogador3"];

vilao = ["vilao1", "vilao2", "vilao3"];

forcaPersonagem = 0
forcaVilao = 0

for (let i = 0; i < 3; i ++){
    escolhaPersonagem = prompt("digite o nome do personagem " + (i+1))
    personagem[i] = escolhaPersonagem
    // calculo da força do personagem
    //forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1 - pode ser assim ou assim:
    forcaPersonagem += Math.floor(Math.random() * 10) + 1
}

for (let i = 0; i < 3; i ++){
    sorteioVilao = Math.floor(Math.random() * 10)
    viloesPossiveis = ["Thanos", "Loki", "Ultron", "Magneto", "Venom","Coringa", "Lex Luthor", "Darkseid", "Arlequina", "Espantalho"]
    vilao[i] = viloesPossiveis[sorteioVilao]
    viloesPossiveis.splice(sorteioVilao, 1)
    forcaVilao += Math.floor(Math.random() * 7) + 1
}

alert("personagens escolhidos: " + personagem + "\nvilões escolhidos: " + vilao)

alert("Força do time do jogador: " + forcaPersonagem + "\nForça do time do computador: " + forcaVilao)
if (forcaPersonagem > forcaVilao) {
    alert("Parabéns, você venceu!")
} else if (forcaPersonagem == forcaVilao) {
    alert("Empate!")
} else {
    alert("Você perdeu!")
}   


// calcular a força time do computador e somar a força total

//comparar os dois times e ver quem ganhou