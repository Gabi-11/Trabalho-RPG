import * as readlineSync from "readline-sync";
import { Espadachim } from "./Personagem/espadachim";
import { Mago } from "./Personagem/mago";
import { Item } from "./Itens/item";
import { Inimigo } from "./Monstros/monstroInfo";
import { Slime } from "./Monstros/slime";
import { Esqueleto } from "./Monstros/esqueleto";
import { Mimic } from "./Monstros/mimic";
import { Personagem } from "./Personagem/personagem";

function explorarDungeon(personagem: Personagem): void {
    console.log("\n\n\n Sua aventura começa com você entrando em uma dungeon em que dizem que existe um baú com tesouros");
    console.log("muito valiosos que pertenciam a um Rei já esquecido. Ao entrar, você se depara com dois caminhos.");
    escolherCaminho(personagem, 1);
    escolherCaminho(personagem, 2);
}

function escolherCaminho(personagem: Personagem, etapa: number): void {
    console.log("\nQual caminho você escolherá?");
    console.log("(1) Seguir pelo caminho escuro à esquerda.");
    console.log("(2) Seguir pelo caminho iluminado à direita.");
    const escolha = readlineSync.questionInt("Digite sua escolha: ");

    if (etapa === 1) {
        if (escolha === 1) {
            console.log("\n\n\nAndando pelos corredores escuros da dungeon, você ouve um barulho suspeito. Você aponta sua tocha");
            console.log("para enxergar melhor e se depara com um Slime!");
            lutar(personagem, new Slime());
        } else {
            console.log("\n\n\n Ao derrotar o Slime, ele começa a se desfazer e você percebe uma poção de cura dentro dele.");
            console.log("Você encontrou uma Poção de Vida!");
            personagem.inventario.push(new Item("Poção de Vida", (p) => p.vida += 20));
        }
        escolherCaminho(personagem, 2);
    } else if (etapa === 2) {
        console.log("\n\n\n Ao avançar mais fundo na dungeon, você empurra uma porta que parece levar a um grande salão.");
        console.log("Diante de você, um esqueleto com um manto e uma coroa aparece... Seria esse o Rei Esquecido?");
        lutar(personagem, new Esqueleto());
        escolherCaminho(personagem, 3);
    } else if (etapa === 3) {
        console.log("\n\n\nFinalmente, após derrotar o suposto Rei, você vai ao encontro do tão esperado baú. Você coloca suas mãos nele, mas percebe algo...");
        console.log("O baú está respirando? Isso... é um Mimic!");
        lutar(personagem, new Mimic());
        console.log("Após derrotar o Mimic, você se retira da dungeon com uma grande história para contar.");
    }
}

function lutar(personagem: Personagem, inimigo: Inimigo): void {
    while (personagem.vida > 0 && inimigo.vida > 0) {
        console.log("\nEscolha sua ação:");
        console.log("(1) Atacar");
        console.log("(2) Defender");
        console.log("(3) Usar item");
        console.log("(4) Fugir");
        const escolha = readlineSync.questionInt("Digite sua escolha: ");

        if (escolha === 1) {
            personagem.atacar(inimigo);
        } else if (escolha === 2) {
            personagem.defender(inimigo);
        } else if (escolha === 3) {
            if (personagem.inventario.length > 0) {
                const item = personagem.inventario.pop();
                item?.efeito(personagem);
                console.log(`Você usou ${item?.nome}!`);
            } else {
                console.log("Você não tem itens para usar!");
            }
        } else if (escolha === 4) {
            console.log("Você fugiu da batalha!");
            return;
        }

        if (inimigo.vida > 0) {
            personagem.receberDano(inimigo.forca);
        }
    }
    
    if (personagem.vida > 0) {
        console.log(`${inimigo.nome} foi derrotado!`);
        const item = new Item("Poção de Cura", (p) => p.vida += 20);
        console.log(`${inimigo.nome} dropou ${item.nome}!`);
        personagem.inventario.push(item);
    } else {
        console.log("Você foi derrotado...");
    }
}

// Pergunta ao jogador qual personagem deseja escolher
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

export { explorarDungeon, lutar, escolherCaminho };
