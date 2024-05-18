import { Equipo } from "./src/models/equipo.model";

let equipo1 = new Equipo({
    id:1, 
    nombre:'Junior', 
    tipo:'Futbol', 
    ciudad:'Barranquilla',
    colores:'Rojo', 
    estadio: {
        id:1,
        nombre:'Metropolitano',
        capacidad:85000
    },
    jugadores:[{
            id:1,
            nombre:'Baca',
            edad:38,
            posicion:'DC'}
    ] 
})

let equipo2 = new Equipo({
    id:1, 
    nombre:'Barranquilla FC', 
    tipo:'Futbol', 
    ciudad:'Santa Marta',
    colores:'Blanco', 
    estadio: {
        id:1,
        nombre:'Romelio',
        capacidad:45000
    },
    jugadores:[{
            id:1,
            nombre:'Baca',
            edad:38,
            posicion:'DC'}
    ] 
})

let equipos = [equipo1, equipo2]

function filter<T>(equipos: T[], property: keyof T, value: T[keyof T]): T[]{
    return equipos.filter((equipo)=> equipo[property] === value);
  }

console.log(filter<Equipo>(equipos,"ciudad","Barranquilla"))