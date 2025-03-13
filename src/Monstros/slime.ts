import { Inimigo } from "./monstroInfo";
import { Personagem } from "../Personagem/personagem";

export class Slime implements Inimigo {
    nome = "Slime";
    vida = 30;
    forca = 5;
    defesa = 2;

    atacar(alvo: Personagem): void {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }
}