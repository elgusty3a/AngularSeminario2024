import { Injectable, OnInit } from '@angular/core';
import { Circuit } from './circuit-list/Circuit';

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
        date_race: new Date(2024,5,29,0,0,0),
        time_record: "1:15.484",
        pilot_record: "Lewis Hamilton (2020)",
        stock: 20000,
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
        date_race: new Date(2024,6,19,0,0,0),
        time_record: "1:13.078",
        pilot_record: "Valtteri Bottas (2019)",
        stock: 26840,
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
        date_race: new Date(2024,7,30,0,0,0),
        time_record: "1:05.619",
        pilot_record: "Carlos Sainz (2020)",
        stock: 15900,
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
        date_race: new Date(2024,8,8,0,0,0),
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
        date_race: new Date(2024,8,15,0,0,0),
        time_record: "1:46.286",
        pilot_record: "Valtteri Bottas (2018)",
        stock: 35000,
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
        date_race: new Date(2024,9,24,0,0,0),
        time_record: "1:19.813",
        pilot_record: "Charles Leclerc (2004)",
        stock: 20000,
        quantity: 0
      }
      
    ];

  getMockDataCircuits() {
    return this.circuits;
  }
}