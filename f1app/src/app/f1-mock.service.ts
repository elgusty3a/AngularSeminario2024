import { Injectable, OnInit } from '@angular/core';
import { Circuit } from './circuit-list/Circuit';
import { Pilotos } from './pilotos-list/Pilotos';

@Injectable({
  providedIn: 'root'
})
export class F1MockService implements OnInit{

  constructor() { }
  ngOnInit(): void {
    
  }

    // hoy:Date = new Date();
    
    hoy = new Date();
    // fechaActual = String(this.hoy.getDate()).padStart(2, '0') + '/' + String(this.hoy.getMonth() + 1).padStart(2, '0') + '/' + this.hoy.getFullYear();
    dia: number = (this.hoy.getMonth());
    
    
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

    pilotos: Pilotos[] = 
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

  getMockDataCircuits() {
    return this.circuits;
  }
  getMockDataPilotos() {
    return this.pilotos;
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
 */