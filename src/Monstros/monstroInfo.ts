import { Personagem } from "../Personagem/personagem";

export interface Inimigo {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;
    atacar(alvo: Personagem): void;
}