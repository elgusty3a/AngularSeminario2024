/** 
 * 
 * EN CASO DE QUE NO FUNCIONE EL SERVICIOS DE LA API SE PUEDE DESCOMENTAR LAS LINEAS COMENTADAS PARA
 * USAR UN MOCK CREADO EN EL SERVICIO F1-MOCK.SERVICE Y COMENTAR LAS CORRESPONDIENTES A FI-APP-DATA.SERVICE
 * 
 */

import { Component, OnInit, Input } from '@angular/core';
// import { F1MockService } from '../f1-mock.service';
import { F1AppDataService } from '../f1-app-data.service';
import { Circuit } from '../circuit-list/Circuit';
import { LogicaAppService } from '../logica-app.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit{
  
  constructor(
    // private f1MockService: F1MockService,
    private f1AppDataService: F1AppDataService,
    private logicaAppService: LogicaAppService
  ) { }
  circuits: Circuit[] =[];

  ngOnInit() {
    // this.circuits = this.f1MockService.getMockDataCircuits();
    this.f1AppDataService.getF1DataCircuits().subscribe(circuits => this.circuits = circuits);
  }
  eventoPasado(circuit:Circuit):boolean {
    return (this.logicaAppService.crearFechaConString(circuit.date_race) < (this.logicaAppService.hoy));
  }

}
