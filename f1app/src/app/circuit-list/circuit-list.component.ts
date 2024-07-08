/** 
 * 
 * EN CASO DE QUE NO FUNCIONE EL SERVIDOS DE LA API SE PUEDE DESCOMENTAR LAS LINEAS COMENTADAS PARA
 * USAR UN MOCK CREADO EN EL SERVICIO F1-MOCK.SERVICE
 * 
 * NOTA: por defecto la parte del carro y lista de ciruitos esta usando el mock, porque consumiendo la API
 * no consegui que, cuando se elimina un item del carro, vuelva a la cantidad original en al lista de circuitos.
 * de todas maneras dejo comentado para que se vea que se intentó
 * 
 */


import { Component, OnInit } from '@angular/core';
import { F1MockService } from '../f1-mock.service';
import { Circuit } from './Circuit';
import { LogicaAppService } from '../logica-app.service';
import { F1ShopService } from '../f1-shop.service';
// import { F1AppDataService } from '../f1-app-data.service';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrl: './circuit-list.component.scss'
})

 export class CircuitListComponent implements OnInit{

  circuits: Circuit[] = [];

  constructor(
    private f1MockService: F1MockService,
    private logicaAppService: LogicaAppService,
    private shopService: F1ShopService,
    // private f1AppDataService: F1AppDataService
    ) { }

  ngOnInit() {
    this.circuits = this.f1MockService.getMockDataCircuits();
    // this.f1AppDataService.getF1DataCircuits().subscribe(circuits => this.circuits = circuits);
  }

  eventoPasado(circuit:Circuit):boolean {
    return (this.logicaAppService.crearFechaConString(circuit.date_race) < (this.logicaAppService.hoy));
  }

 
  agregarAlCarro(circuit: Circuit) : void{
    this.shopService.agregarAlCarro(circuit);
    circuit.stock -= circuit.quantity;
    circuit.quantity = 0;
  }


  

}
