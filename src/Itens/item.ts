import { Personagem } from "../Personagem/personagem";

export class Item {
    nome: string;
    efeito: (personagem: Personagem) => void;

    constructor(nome: string, efeito: (personagem: Personagem) => void) {
        this.nome = nome;
        this.efeito = efeito;
    }
}