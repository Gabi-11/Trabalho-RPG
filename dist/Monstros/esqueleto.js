"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Esqueleto = void 0;
class Esqueleto {
    constructor() {
        this.nome = "Esqueleto";
        this.vida = 50;
        this.forca = 10;
        this.defesa = 4;
    }
    atacar(alvo) {
        const dano = Math.max(this.forca - alvo.defesa, 0);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }
}
exports.Esqueleto = Esqueleto;
