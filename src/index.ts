import Piloto from "./Piloto";

const pilotoValterri = new Piloto(77, "Valtteri Bottas","Finlandes");
const pilotoPierre = new Piloto(10, "Pierre Gasly","Frances");
const pilotoLewis = new Piloto (44,"Lewis Hamilton", "Ingles" );
const pilotoCharles = new Piloto (16,"Charles Leclerc", "Monegazco" );
const pilotoLando = new Piloto (4,"Lando Norris", "Ingles" );
const pilotoSergio = new Piloto (11,"Sergio Perez", "Mexicano" );
const pilotoCarlos = new Piloto (55,"Carlos Sainz", "Espanol" );
const pilotoMax = new Piloto (33,"Max Verstappen", "Holandes" );
const pilotoDaniel = new Piloto (3,"Max Verstappen", "Australiano" );

// 1
let puntuaciones2021: Map<Piloto, number> = new Map<Piloto, number>();
puntuaciones2021.set(pilotoValterri, 203);
puntuaciones2021.set(pilotoPierre, 92);
puntuaciones2021.set(pilotoLewis, 343.5);
puntuaciones2021.set(pilotoCharles, 152);
puntuaciones2021.set(pilotoLando, 153);
puntuaciones2021.set(pilotoSergio, 190);
puntuaciones2021.set(pilotoCarlos, 145.5);
puntuaciones2021.set(pilotoMax, 351.5);
puntuaciones2021.set(pilotoDaniel, 105);

let puntuaciones2020: Map<Piloto, number> = new Map<Piloto, number>();
puntuaciones2020.set(pilotoValterri, 223);
puntuaciones2020.set(pilotoPierre, 75);
puntuaciones2020.set(pilotoLewis, 347);
puntuaciones2020.set(pilotoCharles, 98);
puntuaciones2020.set(pilotoLando, 97);
puntuaciones2020.set(pilotoSergio, 125);
puntuaciones2020.set(pilotoCarlos, 105);
puntuaciones2020.set(pilotoMax, 214);
puntuaciones2020.set(pilotoDaniel, 105);

// 2
const pilotoLance = new Piloto (18,"Lance Stroll", "Canadiense");
puntuaciones2021.set(pilotoLance, 34);
puntuaciones2020.set(pilotoLance, 75);

// 3
const pilotosOrdenadosPorNumero: Piloto[] = Array.from(puntuaciones2021.keys());
pilotosOrdenadosPorNumero.sort((a: Piloto, b: Piloto) => {
    return a.numero - b.numero;
});

// 4
const pilotosOrdenadosPorPuntajeEn2020 = Array.from(puntuaciones2020.entries());
pilotosOrdenadosPorPuntajeEn2020.sort((a: [Piloto, number], b: [Piloto, number]): number => {
    return a[1] - b[1];
});

puntuaciones2020 = new Map(pilotosOrdenadosPorPuntajeEn2020);

// 5
const pilotosOrdenadosPorPuntajeEn2021 = Array.from(puntuaciones2021.entries());
pilotosOrdenadosPorPuntajeEn2021.sort((a: [Piloto, number], b: [Piloto, number]): number => {
    return b[1] - a[1];
});

puntuaciones2021 = new Map(pilotosOrdenadosPorPuntajeEn2021);

// 6
const pilotos: Piloto[] = Array.from(puntuaciones2021.keys());
const nacionalidades: string[] = pilotos.map((piloto: Piloto) => {
    return piloto.nacionalidad;
});

const nacionalidadesUnicas = new Set(nacionalidades);
console.log(nacionalidadesUnicas);
