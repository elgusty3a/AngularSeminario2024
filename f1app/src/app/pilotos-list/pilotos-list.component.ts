/** 
 * 
 * EN CASO DE QUE NO FUNCIONE EL SERVICIOS DE LA API SE PUEDE DESCOMENTAR LAS LINEAS COMENTADAS PARA
 * USAR UN MOCK CREADO EN EL SERVICIO F1-MOCK.SERVICE Y COMENTAR LAS CORRESPONDIENTES A FI-APP-DATA.SERVICE
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Piloto } from './Piloto';
import { F1AppDataService } from '../f1-app-data.service';
// import { F1MockService } from '../f1-mock.service';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrl: './pilotos-list.component.scss'
})
export class PilotosListComponent implements OnInit {
  pilotos: Piloto[] = [];

  constructor(
    // private f1MockService: F1MockService,
    private f1AppDataService: F1AppDataService
  ){}

  ngOnInit(): void {
    // this.pilotos = this.f1MockService.getMockDataPilotos();
    this.f1AppDataService.getF1DataPilotos().subscribe(pilotos => this.pilotos = pilotos);
  }


}
