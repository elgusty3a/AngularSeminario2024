import { Component, OnInit } from '@angular/core';
// import { F1MockService } from '../f1-mock.service';
import { Circuit } from './Circuit';
import { F1AppDataService } from '../f1-app-data.service';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrl: './circuit-list.component.scss'
})


// fechaActual = String(this.hoy.getDate()).padStart(2, '0') + '/' + String(this.hoy.getMonth() + 1).padStart(2, '0') + '/' + this.hoy.getFullYear();
 export class CircuitListComponent implements OnInit{
  hoy = new Date();
  circuits: Circuit[] = [];

  constructor(
    // private f1MockService: F1MockService,
    private f1AppDataService: F1AppDataService
    ) { }

  ngOnInit() {
    // this.circuits = this.f1MockService.getMockDataCircuits();
    this.f1AppDataService.getF1DataCircuits().subscribe(circuits => this.circuits = circuits);
  }

  eventoPasado(circuit:Circuit):boolean {
    // return (circuit.date_race.getDate() >= (this.hoy.getDate())&&(circuit.date_race.getMonth() >= (1+this.hoy.getMonth())));
    return (circuit.pass);
  }
 
  // constructor(private carro: F1ShopService){
    
  // }

 
  agregarAlCarro(circuits: Circuit) : void{
    this.agregarAlCarro(circuits);
  }

  

}
