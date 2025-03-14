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
exports.lutar = lutar;
const item_1 = require("./Itens/item");
const readlineSync = __importStar(require("readline-sync"));
function lutar(personagem, inimigo) {
    while (personagem.vida > 0 && inimigo.vida > 0) {
        console.log("\nEscolha sua ação:");
        console.log("(1) Atacar");
        console.log("(2) Defender");
        console.log("(3) Usar item");
        console.log("(4) Fugir");
        const escolha = readlineSync.questionInt("Digite sua escolha: ");
        if (escolha === 1) {
            personagem.atacar(inimigo);
        }
        else if (escolha === 2) {
            console.log(`${personagem.nome} está se preparando para se defender!`);
        }
        else if (escolha === 3) {
            if (personagem.inventario.length > 0) {
                const item = personagem.inventario.pop();
                item === null || item === void 0 ? void 0 : item.efeito(personagem);
                console.log(`Você usou ${item === null || item === void 0 ? void 0 : item.nome} e recuperou 20 de vida!`);
            }
            else {
                console.log("Você não tem itens para usar!");
            }
        }
        else if (escolha === 4) {
            console.log("Você fugiu da batalha!");
            return;
        }
        // Turno do inimigo
        if (inimigo.vida > 0) {
            if (escolha === 2) {
                personagem.defender(inimigo.forca);
            }
            else {
                personagem.vida -= inimigo.forca;
                console.log(`${inimigo.nome} atacou ${personagem.nome}, causando ${inimigo.forca} de dano!`);
            }
        }
    }
    if (personagem.vida > 0) {
        console.log(`${inimigo.nome} foi derrotado!`);
        const item = new item_1.Item("Poção de Cura", (p) => p.vida += 20);
        console.log(`${inimigo.nome} dropou ${item.nome}!`);
        personagem.inventario.push(item);
    }
    else {
        console.log("Você foi derrotado...");
    }
}
