import { Inimigo } from "./monstroInfo";
import { Personagem } from "../Personagem/personagem";

export class Esqueleto implements Inimigo {
    nome = "Esqueleto";
    vida = 50;
    forca = 10;
    defesa = 4;

    atacar(alvo: Personagem): void {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }
}