/** 
 * 
 * EN CASO DE QUE NO FUNCIONE EL SERVICIOS DE LA API SE PUEDE DESCOMENTAR LAS LINEAS COMENTADAS PARA
 * USAR UN MOCK CREADO EN EL SERVICIO F1-MOCK.SERVICE Y COMENTAR LAS CORRESPONDIENTES A FI-APP-DATA.SERVICE
 * 
*/
import { Component } from '@angular/core';
import { F1AppDataService } from '../f1-app-data.service';
import { Escuderia } from './Escuderia';
// import { F1MockService } from '../f1-mock.service';

@Component({
  selector: 'app-escuderias-list',
  templateUrl: './escuderias-list.component.html',
  styleUrl: './escuderias-list.component.scss'
})
export class EscuderiasListComponent {
  escuderias: Escuderia[] = [];
  constructor(
    // private f1MockService: F1MockService,
    private f1AppDataService: F1AppDataService
  ){}

  ngOnInit(): void {
    // this.pilotos = this.f1MockService.getMockDataEscuderias();
    this.f1AppDataService.getF1DataEscuderias().subscribe(escuderias => this.escuderias = escuderias);
  }

}
