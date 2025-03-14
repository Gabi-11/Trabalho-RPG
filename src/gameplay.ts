import * as readlineSync from "readline-sync";
import { Espadachim } from "./Personagem/espadachim";
import { Mago } from "./Personagem/mago";
import { Personagem } from "./Personagem/personagem";
import { escolherCaminho } from "./caminho";

function explorarDungeon(personagem: Personagem): void {
    console.log("\n\n\n Sua aventura começa com você entrando em uma dungeon em que dizem que existe um baú com tesouros");
    console.log("muito valiosos que pertenciam a um Rei já esquecido. Ao entrar, você se depara com dois caminhos.");
    escolherCaminho(personagem, 1);
    
}
console.log("Escolha seu personagem:");
console.log("(1) Espadachim");
console.log("(2) Mago");
const escolhaPersonagem = readlineSync.questionInt("Digite sua escolha: ");

let jogador: Personagem;
if (escolhaPersonagem === 1) {
    jogador = new Espadachim();
} else {
    jogador = new Mago();
}

// Inicia o jogo
explorarDungeon(jogador);
