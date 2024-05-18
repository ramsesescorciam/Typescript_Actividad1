export type PosicionJ = "GK" | "DFC" | "DFL" | "DFR" | "MCD" | "MCO" | "MC" | "ST" | "ST" | "DC" | "RF" | "LF";

export interface Jugador {
    id: number;
    nombre: string;
    edad: number;
    posicion: PosicionJ;
}