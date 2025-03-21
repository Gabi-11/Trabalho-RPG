"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    defender(inimigo) {
        throw new Error("Method not implemented.");
    }
    constructor(nome, vida, forca, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.inventario = [];
    }
    atacar(alvo) {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }
    receberDano(dano) {
        const danoFinal = Math.max(dano - this.defesa, 0);
        this.vida -= danoFinal;
        console.log(`${this.nome} recebeu ${danoFinal} de dano!`);
    }
}
exports.Personagem = Personagem;
