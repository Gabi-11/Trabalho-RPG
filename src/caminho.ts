import { Personagem} from "./Personagem/personagem";
import { Item} from "./Itens/item";
import * as readlineSync from "readline-sync";
import { Slime } from "./Monstros/slime";
import { Esqueleto } from "./Monstros/esqueleto";
import { Mimic } from "./Monstros/mimic";
import { lutar } from "./combate";



export function escolherCaminho(personagem: Personagem, etapa: number): void {
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
            console.log("\n\n\n Andando pelo caminho iluminado, você percebe nota que no fim do caminho existe um mini altar.");
            console.log("Em cima dele você percebe um frasco com um líquido vermelho. Você encontrou uma Poção de Vida!");
            personagem.inventario.push(new Item("Poção de Vida", (p) => p.vida += 20));
        }
        escolherCaminho(personagem, 2);
    } else if (etapa === 2) {
        console.log("\n\n\n Ao avançar mais fundo na dungeon, você empurra uma porta que parece levar a um grande salão.");
        console.log("Diante de você, um esqueleto com um manto e uma coroa aparece... Seria esse o Rei Esquecido?");
        lutar(personagem, new Esqueleto());
        escolherCaminho(personagem, 3);
    } else if (etapa === 3) {
        console.log("\n\n\n Finalmente, após derrotar o suposto Rei, você vai ao encontro do tão esperado baú. Você coloca suas mãos nele, mas percebe algo... O baú está respirando? Isso... é um Mimic!");
        lutar(personagem, new Mimic());
        console.log("Após derrotar o Mimic, você se retira da dungeon com uma grande história para contar.");
    }
}