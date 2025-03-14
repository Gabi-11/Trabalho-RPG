import { Item} from "../Itens/item";
import { Inimigo } from "../Monstros/monstroInfo";

export class Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;
    inventario: Item[];

    constructor(nome: string, vida: number, forca: number, defesa: number) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.inventario = [];
    }

    atacar(alvo: Inimigo): void {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }

    defender(ataqueInimigo: number): void {
        if (this.defesa >= ataqueInimigo) {
            console.log(`${this.nome} bloqueou completamente o ataque!`);
        } else {
            const danoFinal = ataqueInimigo - this.defesa;
            this.vida -= danoFinal;
            console.log(`${this.nome} defendeu, mas ainda tomou ${danoFinal} de dano!`);
        }
    }
}
