import { Injectable, OnInit } from '@angular/core';
import { Circuit } from './circuit-list/Circuit';
import { Piloto } from './pilotos-list/Piloto';
import { Escuderia } from './escuderias-list/Escuderia';

@Injectable({
  providedIn: 'root'
})
export class F1MockService implements OnInit{

  constructor() { }
  ngOnInit(): void {
    
  }
    
    hoy = new Date();
    
    circuits: Circuit[]=[
      {
        name: "Autodromo Enzo e Dino Ferrari",
        country: "Italia",
        lengh: "4.909",
        laps: 63,
        price: 320,
        image: 'assets/img/EmiliaRomagnacarbon.png',
        pass: true,
        date_race: "2024-05-29",
        time_record: "1:15.484",
        pilot_record: "Lewis Hamilton (2020)",
        stock: 20,
        quantity: 0
      },
      {
        name: "Circuit Gilles-Villeneuve",
        country: "Canada",
        lengh: "4.361",
        laps: 70,
        price: 450,
        image: 'assets/img/Canadacarbon.png',
        pass: true,
        date_race: "2024-06-19",
        time_record: "1:13.078",
        pilot_record: "Valtteri Bottas (2019)",
        stock: 26,
        quantity: 0
      },
      {
        name: "Red Bull Ring",
        country: "Austria",
        lengh: "4.318",
        laps: 71,
        price: 500,
        image: 'assets/img/Austriacarbon.png',
        pass: false,
        date_race: "2024-07-02",
        time_record: "1:05.619",
        pilot_record: "Carlos Sainz (2020)",
        stock: 15,
        quantity: 0
      },
      {
        name: "Silverstone Circuit",
        country: "Inglaterra",
        lengh: "5.891",
        laps: 52,
        price: 380,
        image: 'assets/img/GreatBritaincarbon.png',
        pass: false,
        date_race: "2024-08-08",
        time_record: "1:27.097",
        pilot_record: "Max Verstappen (2020)",
        stock: 0,
        quantity: 0
      },
      {
        name: "Circuit de Spa-Francorchamps",
        country: "Belgica",
        lengh: "7.004",
        laps: 44,
        price: 610,
        image: 'assets/img/Belgiumcarbon.png',
        pass: true,
        date_race: "2024-08-15",
        time_record: "1:46.286",
        pilot_record: "Valtteri Bottas (2018)",
        stock: 3,
        quantity: 0
      },
      {
        name: "Melbourne Grand Prix Circuit",
        country: "Australia",
        lengh: "5.278",
        laps: 58,
        price: 400,
        image: 'assets/img/Australiacarbon.png',
        pass: true,
        date_race: "2024-09-24",
        time_record: "1:19.813",
        pilot_record: "Charles Leclerc (2004)",
        stock: 2,
        quantity: 0
      }
      
    ];

    pilotos: Piloto[] = 
    [
      {
        name: "Charles Leclerc",
        country: "Monaco",
        age: "1997-10-16",
        escuderia: "Ferrari",
        image: "assets/img/charles-leclerc-ferrari.webp"
      },
      {
        name: "Carlos Sainz",
        country: "España",
        age: "1994-09-01",
        escuderia: "Ferrari",
        image: "assets/img/carlos-sainz-ferrari.webp"
      },
      {
        name: "Geroge Russell",
        country: "Inglaterra",
        age: "1998-02-15",
        escuderia: "Mercedes",
        image: "assets/img/george-russell-mercedes.webp"
      },
      {
        name: "Lewsi Hamilton",
        country: "Inglaterra",
        age: "1985-01-07",
        escuderia: "Mercedes",
        image: "assets/img/lewis-hamilton-mercedes.webp"
      },
      {
        name: "Lando Norris",
        country: "Inglaterra",
        age: "1999-11-13",
        escuderia: "McLaren",
        image: "assets/img/lando-norris-mclaren.webp"
      },
      {
        name: "Oscar Piastri",
        country: "Australia",
        age: "2001-04-06",
        escuderia: "McLaren",
        image: "assets/img/oscar-piastri-mclaren.webp"
      },
      {
        name: "Max Verstappen",
        country: "Holanda",
        age: "1997-09-30",
        escuderia: "Red Bull",
        image: "assets/img/max-verstappen-red-bull-racing.webp"
      },
      {
        name: "Sergio Perez",
        country: "Mexico",
        age: "1990-01-26",
        escuderia: "Red Bull",
        image: "assets/img/sergio-perez-red-bull-racing.webp"
      },  
    ];

    escuderias: Escuderia[] = 
    [
      {
        name: "Ferrari",
        country: "Italia",
        debut: "1950",
        bio: "El equipo Ferrari es la entidad con más historia de la Fórmula 1, con un legado que se remonta a la temporada inaugural de 1950 y un nutrido palmarés compuesto por dieciséis títulos del Mundial de Constructores y quince del de Pilotos. Enzo Ferrari fundó la entidad en 1929, que en sus inicios ejerció como equipo privado. En 1933, su formación se convirtió en el esfuerzo de fábrica de Alfa Romeo. En 1937, Alfa Romeo compró las acciones de la Scuderia Ferrari y transfirió su actividad a la división de Alfa Corse. Enzo Ferrari dejó la empresa en 1939. En la década de 1940, Ferrari dio sus primeros pasos como constructor y productor de automóviles. En 1943, trasladó su actividad de Módena a Maranello. Su debut en el automovilismo de Grandes Premios se produjo en Italia 1948. En 1950 se constituyó el Mundial de Fórmula 1 y Ferrari se inscribió en él, aunque se ausentó de la carrera inaugural en Silverstone por una disputa económica. En Gran Bretaña 1951, José Froilán González consiguió su primera victoria. En 1952, Alberto Ascari se hizo con el primer campeonato.",
        imageCoche: "assets/img/Ferrari.jpg",
        imageEscudo: "assets/img/FerrEscudo.jpg"
      },
      {
        name: "Mercedes",
        country: "Alemania",
        debut: "2010",
        bio: "El origen de Mercedes en el automovilismo de Grandes Premios se remonta a la década de 1930, cuando el constructor fue una de las fuerzas dominantes del panorama europeo. Ganó el título europeo en 1935, 1937 y 1938 con Rudolf Caracciola como piloto estrella y Alfred Neubauer como director deportivo. En 1954 y 1955, Mercedes se inscribió en el campeonato del mundo de Fórmula 1 con Juan Manuel Fangio como primer espada. El argentino ganó el título de pilotos en ambas temporadas y la marca cosechó nueve victorias. No ganó el título de Constructores porque éste no se disputó hasta 1958. Mercedes se retiró del automovilismo deportivo después del desastre de Le Mans 1955, pero regresó en 1994 en calidad de fabricante de motores. Entre 1994 y 2009, sus unidades de potencia ganaron cuatro títulos de Pilotos y dos de Constructores. La temporada 2010 fue la del retorno de Mercedes a la Fórmula 1 como equipo oficial. Ross Brawn asumió el liderazgo deportivo y técnico del proyecto, que contaba con el siete veces campeón Michael Schumacher en su alineación.",
        imageCoche: "assets/img/Mercedes.jpg",
        imageEscudo: "assets/img/MercedesEscudo.jpg"
      },
      {
        name: "McLaren",
        country: "Inglaterra",
        debut: "1966",
        bio: "McLaren dio sus primeros pasos en la Fórmula 1 en 1966, de la mano de su fundador, el legendario Bruce McLaren. En cinco brillantes décadas de historia, McLaren ha participado en más de 800 carreras, obteniendo más de 180 victorias, más de 150 pole position, conquistando ocho campeonatos de constructores y doce de pilotos. Además de haber contado en sus filas con algunos de los mejores pilotos de la historia de la F1, incluyendo a Emerson Fittipaldi, Niki Lauda, James Hunt, Mika Hakkinen, Lewis Hamilton y por supuesto la dupla explosiva conformada por Ayrton Senna y Alain Prost, que tantas emociones brindó a los aficionados a principios de los noventa, con los motores Honda.",
        imageCoche: "assets/img/McLaren.jpg",
        imageEscudo: "assets/img/MLEscudo.jpg"
      },
      {
        name: "Red Bull",
        country: "Autria",
        debut: "2005",
        bio: "Red Bull Racing es un equipo privado de origen austríaco con sede en Milton Keynes, en Gran Bretaña. Es propiedad de la marca de bebidas homónima. El origen de Red Bull en el automovilismo se remonta al año 1987, cuando fue patrocinadora personal del piloto Gerhard Berger. Entre 1995 y 2004, patrocinó al equipo Sauber. En 2005, compró los restos de Jaguar Racing y fundó su propia escudería: Red Bull Racing. Con el apoyo económico de Dietrich Mateschitz y la dirección deportiva de Christian Horner, la entidad se embarcó en un proyecto a largo plazo. Ganarse el respeto de sus rivales fue el primer reto, y es que muchos dudaban que una marca de bebidas fuera capaz de crear monoplazas competitivos.",
        imageCoche: "assets/img/RB.jpg",
        imageEscudo: "assets/img/RBEscudo.jpg"
      }
    ];

  getMockDataCircuits() {
    return this.circuits;
  }
  getMockDataPilotos() {
    return this.pilotos;
  }
  getMockDataEscuderias() {
    return this.escuderias;
  }
}


/**
 * Objetos cargados en las paginas para consumir API
 *
 *? Pilotos 
 *  
 * [
      {
        "id": "1",
        "name": "Charles Leclerc",
        "country": "Monaco",
        "age": "1997-10-16",
        "escuderia": "Ferrari",
        "image": "assets/img/charles-leclerc-ferrari.webp"
      },
      {
        "id": "2",
        "name": "Carlos Sainz",
        "country": "España",
        "age": "1994-09-01",
        "escuderia": "Ferrari",
        "image": "assets/img/carlos-sainz-ferrari.webp"
      },
      {
        "id": "3",
        "name": "Geroge Russell",
        "country": "Inglaterra",
        "age": "1998-02-15",
        "escuderia": "Mercedes",
        "image": "assets/img/george-russell-mercedes.webp"
      },
      {
        "id": "4",
        "name": "Lewsi Hamilton",
        "country": "Inglaterra",
        "age": "1985-01-07",
        "escuderia": "Mercedes",
        "image": "assets/img/lewis-hamilton-mercedes.webp"
      },
      {
        "id": "5",
        "name": "Lando Norris",
        "country": "Inglaterra",
        "age": "1999-11-13",
        "escuderia": "McLaren",
        "image": "assets/img/lando-norris-mclaren.webp"
      },
      {
        "id": "6",
        "name": "Oscar Piastri",
        "country": "Australia",
        "age": "2001-04-06",
        "escuderia": "McLaren",
        "image": "assets/img/oscar-piastri-mclaren.webp"
      },
      {
        "id": "6",
        "name": "Max Verstappen",
        "country": "Holanda",
        "age": "1997-09-30",
        "escuderia": "Red Bull",
        "image": "assets/img/max-verstappen-red-bull-racing.webp"
      },
      {
        "id": "8",
        "name": "Sergio Perez",
        "country": "Mexico",
        "age": "1990-01-26",
        "escuderia": "Red Bull",
        "image": "assets/img/sergio-perez-red-bull-racing.webp"
      },  
    ];
 * 
 *? Circuitos
 * 
 * [
  {
    "id": "1",
    "name": "Autodromo Enzo e Dino Ferrari",
    "country": "Italia",
    "lengh": "4.909",
    "laps": 63,
    "price": 320,
    "image": "assets/img/EmiliaRomagnacarbon.png",
    "pass": true,
    "date_race": "2024-05-29",
    "time_record": "1:15.484",
    "pilot_record": "Lewis Hamilton (2020)",
    "stock": 20000,
    "quantity": 0
  },
  {
    "id": "2",
    "name": "Circuit Gilles-Villeneuve",
    "country": "Canada",
    "lengh": "4.361",
    "laps": 70,
    "price": 450,
    "image": "assets/img/Canadacarbon.png",
    "pass": true,
    "date_race": "2024-06-19",
    "time_record": "1:13.078",
    "pilot_record": "Valtteri Bottas (2019)",
    "stock": 26840,
    "quantity": 0
  },
  {
    "id": "3",
    "name": "Red Bull Ring",
    "country": "Austria",
    "lengh": "4.318",
    "laps": 71,
    "price": 500,
    "image": "assets/img/Austriacarbon.png",
    "pass": true,
    "date_race": "2024-07-02",
    "time_record": "1:05.619",
    "pilot_record": "Carlos Sainz (2020)",
    "stock": 15900,
    "quantity": 0
  },
  {
    "id": "4",
    "name": "Silverstone Circuit",
    "country": "Inglaterra",
    "lengh": "5.891",
    "laps": 52,
    "price": 380,
    "image": "assets/img/GreatBritaincarbon.png",
    "pass": false,
    "date_race": "2024-08-08",
    "time_record": "1:27.097",
    "pilot_record": "Max Verstappen (2020)",
    "stock": 0,
    "quantity": 0
  },
  {
    "id": "5",
    "name": "Circuit de Spa-Francorchamps",
    "country": "Belgica",
    "lengh": "7.004",
    "laps": 44,
    "price": 610,
    "image": "assets/img/Belgiumcarbon.png",
    "pass": false,
    "date_race": "2024-08-15",
    "time_record": "1:46.286",
    "pilot_record": "Valtteri Bottas (2018)",
    "stock": 35000,
    "quantity": 0
  },
  {
    "id": "6",
    "name": "Melbourne Grand Prix Circuit",
    "country": "Australia",
    "lengh": "5.278",
    "laps": 58,
    "price": 400,
    "image": "assets/img/Australiacarbon.png",
    "pass": false,
    "date_race": "2024-09-24",
    "time_record": "1:19.813",
    "pilot_record": "Charles Leclerc (2004)",
    "stock": 20000,
    "quantity": 0
  }
]
 * 
 * Escuderias
 *
 * [
      {
        "name": "Ferrari",
        "country": "Italia",
        "debut": "1950",
        "bio": "El equipo Ferrari es la entidad con más historia de la Fórmula 1, con un legado que se remonta a la temporada inaugural de 1950 y un nutrido palmarés compuesto por dieciséis títulos del Mundial de Constructores y quince del de Pilotos. Enzo Ferrari fundó la entidad en 1929, que en sus inicios ejerció como equipo privado. En 1933, su formación se convirtió en el esfuerzo de fábrica de Alfa Romeo. En 1937, Alfa Romeo compró las acciones de la Scuderia Ferrari y transfirió su actividad a la división de Alfa Corse. Enzo Ferrari dejó la empresa en 1939. En la década de 1940, Ferrari dio sus primeros pasos como constructor y productor de automóviles. En 1943, trasladó su actividad de Módena a Maranello. Su debut en el automovilismo de Grandes Premios se produjo en Italia 1948. En 1950 se constituyó el Mundial de Fórmula 1 y Ferrari se inscribió en él, aunque se ausentó de la carrera inaugural en Silverstone por una disputa económica. En Gran Bretaña 1951, José Froilán González consiguió su primera victoria. En 1952, Alberto Ascari se hizo con el primer campeonato.",
        "imageCoche": "assets/img/Ferrari.jpg",
        "imageEscudo": "assets/img/FerrEscudo.jpg"
      },
      {
        "name": "Mercedes",
        "country": "Alemania",
        "debut": "2010",
        "bio": "El origen de Mercedes en el automovilismo de Grandes Premios se remonta a la década de 1930, cuando el constructor fue una de las fuerzas dominantes del panorama europeo. Ganó el título europeo en 1935, 1937 y 1938 con Rudolf Caracciola como piloto estrella y Alfred Neubauer como director deportivo. En 1954 y 1955, Mercedes se inscribió en el campeonato del mundo de Fórmula 1 con Juan Manuel Fangio como primer espada. El argentino ganó el título de pilotos en ambas temporadas y la marca cosechó nueve victorias. No ganó el título de Constructores porque éste no se disputó hasta 1958. Mercedes se retiró del automovilismo deportivo después del desastre de Le Mans 1955, pero regresó en 1994 en calidad de fabricante de motores. Entre 1994 y 2009, sus unidades de potencia ganaron cuatro títulos de Pilotos y dos de Constructores. La temporada 2010 fue la del retorno de Mercedes a la Fórmula 1 como equipo oficial. Ross Brawn asumió el liderazgo deportivo y técnico del proyecto, que contaba con el siete veces campeón Michael Schumacher en su alineación.",
        "imageCoche": "assets/img/Mercedes.jpg",
        "imageEscudo": "assets/img/MercedesEscudo.jpg"
      },
      {
        "name": "McLaren",
        "country": "Inglaterra",
        "debut": "1966",
        "bio": "McLaren dio sus primeros pasos en la Fórmula 1 en 1966, de la mano de su fundador, el legendario Bruce McLaren. En cinco brillantes décadas de historia, McLaren ha participado en más de 800 carreras, obteniendo más de 180 victorias, más de 150 pole position, conquistando ocho campeonatos de constructores y doce de pilotos. Además de haber contado en sus filas con algunos de los mejores pilotos de la historia de la F1, incluyendo a Emerson Fittipaldi, Niki Lauda, James Hunt, Mika Hakkinen, Lewis Hamilton y por supuesto la dupla explosiva conformada por Ayrton Senna y Alain Prost, que tantas emociones brindó a los aficionados a principios de los noventa, con los motores Honda.",
        "imageCoche": "assets/img/McLAren.jpg",
        "imageEscudo": "assets/img/MLEscudo.jpg"
      },
      {
        "name": "Red Bull",
        "country": "Autria",
        "debut": "2005",
        "bio": "Red Bull Racing es un equipo privado de origen austríaco con sede en Milton Keynes, en Gran Bretaña. Es propiedad de la marca de bebidas homónima. El origen de Red Bull en el automovilismo se remonta al año 1987, cuando fue patrocinadora personal del piloto Gerhard Berger. Entre 1995 y 2004, patrocinó al equipo Sauber. En 2005, compró los restos de Jaguar Racing y fundó su propia escudería: Red Bull Racing. Con el apoyo económico de Dietrich Mateschitz y la dirección deportiva de Christian Horner, la entidad se embarcó en un proyecto a largo plazo. Ganarse el respeto de sus rivales fue el primer reto, y es que muchos dudaban que una marca de bebidas fuera capaz de crear monoplazas competitivos.",
        "imageCoche": "assets/img/RB.jpg",
        "imageEscudo": "assets/img/RBEscudo.jpg"
      }
    ];
 */