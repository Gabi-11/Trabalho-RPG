import { Item} from "../Itens/item";
import { Inimigo } from "../Monstros/monstroInfo";

export class Personagem {
    defender(inimigo: Inimigo) {
        throw new Error("Method not implemented.");
    }
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

    receberDano(dano: number): void {
        const danoFinal = Math.max(dano - this.defesa, 0);
        this.vida -= danoFinal;
        console.log(`${this.nome} recebeu ${danoFinal} de dano!`);
    }

    
}