import { Personagem} from "./Personagem/personagem";
import { Item} from "./Itens/item";
import * as readlineSync from "readline-sync";
import { Inimigo } from "./Monstros/monstroInfo";

export function lutar(personagem: Personagem, inimigo: Inimigo): void {
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
            console.log(`${personagem.nome} se defendeu!`);
        } else if (escolha === 3) {
            if (personagem.inventario.length > 0) {
                const item = personagem.inventario.pop();
                item?.efeito(personagem);
                console.log(`Você usou ${item?.nome} e recuperou 20 de vida!`);
            } else {
                console.log("Você não tem itens para usar!");
            }
        } else if (escolha === 4) {
            console.log("Você fugiu da batalha!");
            return;
        }

        // Turno do inimigo
        if (inimigo.vida > 0) {
            if (escolha === 2) {
                personagem.defender(inimigo.forca);
            } else {
                personagem.vida -= inimigo.forca;
                console.log(`${inimigo.nome} atacou ${personagem.nome}, causando ${inimigo.forca} de dano!`);
            }
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


