"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const espadachim_1 = require("./Personagem/espadachim");
const mago_1 = require("./Personagem/mago");
const caminho_1 = require("./caminho");
function explorarDungeon(personagem) {
    console.log("\n\n\n Sua aventura começa com você entrando em uma dungeon em que dizem que existe um baú com tesouros");
    console.log("muito valiosos que pertenciam a um Rei já esquecido. Ao entrar, você se depara com dois caminhos.");
    (0, caminho_1.escolherCaminho)(personagem, 1);
}
console.log("Escolha seu personagem:");
console.log("(1) Espadachim");
console.log("(2) Mago");
const escolhaPersonagem = readlineSync.questionInt("Digite sua escolha: ");
let jogador;
if (escolhaPersonagem === 1) {
    jogador = new espadachim_1.Espadachim();
}
else {
    jogador = new mago_1.Mago();
}
// Inicia o jogo
explorarDungeon(jogador);
