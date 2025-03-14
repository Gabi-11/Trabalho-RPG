"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slime = void 0;
class Slime {
    constructor() {
        this.nome = "Slime";
        this.vida = 30;
        this.forca = 16;
        this.defesa = 2;
    }
    atacar(alvo) {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }
}
exports.Slime = Slime;
