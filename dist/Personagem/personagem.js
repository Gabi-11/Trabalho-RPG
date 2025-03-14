"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
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
    defender(ataqueInimigo) {
        if (this.defesa >= ataqueInimigo) {
            console.log(`${this.nome} bloqueou completamente o ataque!`);
        }
        else {
            const danoFinal = ataqueInimigo - this.defesa;
            this.vida -= danoFinal;
            console.log(`${this.nome} defendeu, mas ainda tomou ${danoFinal} de dano!`);
        }
    }
}
exports.Personagem = Personagem;
