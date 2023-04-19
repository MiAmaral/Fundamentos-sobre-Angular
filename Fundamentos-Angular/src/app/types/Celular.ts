export interface Celular{
    id: number;
    nome:string;
    descricao?: string; // o sinal de ? significa qaue ela pode ser opcional
    esgotado: boolean;
}