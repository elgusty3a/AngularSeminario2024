import { Component, OnInit, Input } from '@angular/core';
import { F1MockService } from '../f1-mock.service';
import { F1AppDataService } from '../f1-app-data.service';
import { Circuit } from '../circuit-list/Circuit';
import { LogicaAppService } from '../logica-app.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit{
  // constructor(){};

  // hoy = new Date();
  // circuits: Circuit[] =[];
  
  constructor(
    private f1MockService: F1MockService,
    private f1AppDataService: F1AppDataService,
    private logicaAppService: LogicaAppService
  ) { }
  circuits: Circuit[] =[];

  ngOnInit() {
    this.circuits = this.f1MockService.getMockDataCircuits();
    // this.f1AppDataService.getF1DataCircuits().subscribe(circuits => this.circuits = circuits);
  }

  // crearFechaConString(fecha: string): Date {
  //   const fechaEvento = new Date(fecha);
  //   if (isNaN(fechaEvento.getTime())) {
  //     throw new Error('Fecha inválida');
  //   }
  //   return fechaEvento;
  // }

  eventoPasado(circuit:Circuit):boolean {
    // return (circuit.date_race.getDate() >= (this.hoy.getDate())&&(circuit.date_race.getMonth() >= (1+this.hoy.getMonth())));
    return (this.logicaAppService.crearFechaConString(circuit.date_race) < (this.logicaAppService.hoy));
    // return (circuit.pass);
  }
  // eventoPasado(circuit:Circuit):boolean {
  //   // return (circuit.date_race.getDate() >= (this.hoy.getDate())&&(circuit.date_race.getMonth() >= (1+this.hoy.getMonth())));
  //   return (this.crearFechaConString(circuit.date_race) < (this.hoy));
  //   // return (circuit.pass);
  // }


  // @Input()
  // circuit: Circuit;
  // @Input()
  // hoy: Date;
  


  // ngOnInit(): void {
    
  // }
}
