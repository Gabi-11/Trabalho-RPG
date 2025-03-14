"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimic = void 0;
class Mimic {
    constructor() {
        this.nome = "Mimic";
        this.vida = 70;
        this.forca = 20;
        this.defesa = 6;
    }
    atacar(alvo) {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }
}
exports.Mimic = Mimic;
