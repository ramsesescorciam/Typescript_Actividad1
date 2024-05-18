import { Estadio } from "./estadio.model";
import { Jugador } from "../jugador.model";

export type TipoE = "Futbol" | "Basket" | "Beisbol";
export type ColoresE = "Blanco" | "Rojo" | "Verde" | "Negro" | "Azul" | "Naranja";

export interface CrearEquipo{
    id: number;
    nombre: string;
    tipo: TipoE;
    ciudad: string;
    colores: ColoresE;
    estadio: Estadio;
    jugadores: Jugador[];
}

export class Equipo {
    id: number;
    nombre: string;
    tipo: TipoE;
    ciudad: string;
    colores: ColoresE;
    estadio: Estadio;
    jugadores: Jugador[];

    constructor({id, nombre, tipo, ciudad, colores, estadio, jugadores}:CrearEquipo) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.ciudad = ciudad;
        this.colores = colores;
        this.estadio = estadio;
        this.jugadores = jugadores;
    }
}

