import { Component, OnInit } from '@angular/core';
import { Circuit } from './Circuit';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrl: './circuit-list.component.scss'
})


export class CircuitListComponent implements OnInit{
  hoy = new Date();

  
  circuits: Circuit[]=[
    {
      name: "Melbourne Grand Prix Circuit",
      country: "Australia",
      lengh: "5.278",
      laps: 58,
      price: 400,
      image: 'assets/img/Australiacarbon.png',
      pass: true,
      date_race: new Date("2024-3-24"),
      time_record: "1:19.813",
      pilot_record: "Charles Leclerc (2004)",
      stock: 20000,
      quantity: 0
    },
    {
      name: "Autodromo Enzo e Dino Ferrari",
      country: "Italia",
      lengh: "4.909",
      laps: 63,
      price: 320,
      image: 'assets/img/EmiliaRomagnacarbon.png',
      pass: true,
      date_race: new Date("2024-4-19"),
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
      date_race: new Date("2024-6-9"),
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
      date_race: new Date("2024-6-29"),
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
      date_race: new Date("2024-7-7"),
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
      pass: false,
      date_race: new Date("2024-7-28"),
      time_record: "1:46.286",
      pilot_record: "Valtteri Bottas (2018)",
      stock: 35000,
      quantity: 0
    }
    
  ]
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  upQuantity(circuit: Circuit): void{
    circuit.quantity++;
  }
  downQuantity(circuit: Circuit): void{
    circuit.quantity--;
  }
}
