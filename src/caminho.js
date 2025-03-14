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
exports.escolherCaminho = escolherCaminho;
const item_1 = require("./Itens/item");
const readlineSync = __importStar(require("readline-sync"));
const slime_1 = require("./Monstros/slime");
const esqueleto_1 = require("./Monstros/esqueleto");
const mimic_1 = require("./Monstros/mimic");
const combate_1 = require("./combate");
function escolherCaminho(personagem, etapa) {
    console.log("\nQual caminho você escolherá?");
    console.log("(1) Seguir pelo caminho escuro à esquerda.");
    console.log("(2) Seguir pelo caminho iluminado à direita.");
    const escolha = readlineSync.questionInt("Digite sua escolha: ");
    if (etapa === 1) {
        if (escolha === 1) {
            console.log("\n\n\nAndando pelos corredores escuros da dungeon, você ouve um barulho suspeito. Você aponta sua tocha");
            console.log("para enxergar melhor e se depara com um Slime!");
            (0, combate_1.lutar)(personagem, new slime_1.Slime());
        }
        else {
            console.log("\n\n\n Andando pelo caminho iluminado, você percebe nota que no fim do caminho existe um mini altar.");
            console.log("Em cima dele você percebe um frasco com um líquido vermelho. Você encontrou uma Poção de Vida!");
            personagem.inventario.push(new item_1.Item("Poção de Vida", (p) => p.vida += 20));
        }
        escolherCaminho(personagem, 2);
    }
    else if (etapa === 2) {
        console.log("\n\n\n Ao avançar mais fundo na dungeon, você empurra uma porta que parece levar a um grande salão.");
        console.log("Diante de você, um esqueleto com um manto e uma coroa aparece... Seria esse o Rei Esquecido?");
        (0, combate_1.lutar)(personagem, new esqueleto_1.Esqueleto());
        escolherCaminho(personagem, 3);
    }
    else if (etapa === 3) {
        console.log("\n\n\n Finalmente, após derrotar o suposto Rei, você vai ao encontro do tão esperado baú. Você coloca suas mãos nele, mas percebe algo... O baú está respirando? Isso... é um Mimic!");
        (0, combate_1.lutar)(personagem, new mimic_1.Mimic());
        console.log("Após derrotar o Mimic, você se retira da dungeon com uma grande história para contar.");
    }
}
