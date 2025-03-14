import { Inimigo } from "./monstroInfo";
import { Personagem } from "../Personagem/personagem";

export class Mimic implements Inimigo {
    nome = "Mimic";
    vida = 70;
    forca = 20;
    defesa = 6;

    atacar(alvo: Personagem): void {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }
}