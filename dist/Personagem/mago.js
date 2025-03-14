"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const personagem_1 = require("./personagem");
class Mago extends personagem_1.Personagem {
    constructor() {
        super("Mago", 80, 20, 3);
    }
}
exports.Mago = Mago;
