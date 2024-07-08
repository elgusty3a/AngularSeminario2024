/** 
 * 
 * EN CASO DE QUE NO FUNCIONE EL SERVIDOS DE LA API SE PUEDE DESCOMENTAR LAS LINEAS COMENTADAS PARA
 * USAR UN MOCK CREADO EN EL SERVICIO F1-MOCK.SERVICE
 * 
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Circuit } from './circuit-list/Circuit';
import { Piloto } from './pilotos-list/Piloto';
import { Escuderia } from './escuderias-list/Escuderia';
// import { F1MockService } from './f1-mock.service';

/**
 * SERVICIOS PARA CONSUMIR API, SE PUEDE USAR UNO U EL OTRO POR SI NO CARGA ALGUNA OPCION
 */

// const URLPILOTOS = 'https://apimocha.com/f1appdata/pilotos';
// const URLCIRCUITS = 'https://apimocha.com/f1appdata/circuits';
// const URLESCUDERIAS = 'https://apimocha.com/f1appdata/escuderias';

const URLCIRCUITS = 'https://f1app.free.beeceptor.com/circuitos';
const URLPILOTOS = 'https://f1app.free.beeceptor.com/pilotos';
const URLESCUDERIAS = 'https://f1app.free.beeceptor.com/escuderias';

@Injectable({
  providedIn: 'root'
})
export class F1AppDataService {
  /**
   * 
   * -------------------------modo mock
   * 
   */

  // public f1DataCircuit(){
  //   return this.datos.getMockDataCircuits;
  // };
  // public f1DataPilotos(){
  //   return this.datos.getMockDataPilotos;
  // };
  // public f1DataEscuderias(){
  //   return this.datos.getMockDataEscuderiass;
  // };

  constructor(
    // private datos: F1MockService,
    private http: HttpClient
  ) { }

  public getF1DataCircuits(): Observable<Circuit[]> {
    return this.http.get<Circuit[]>(URLCIRCUITS).pipe(
      tap((circuits: Circuit[])=>circuits.forEach(circuit => circuit.quantity = 0))
    );
  }
  public getF1DataPilotos(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(URLPILOTOS);
  }
  public getF1DataEscuderias(): Observable<Escuderia[]> {
    return this.http.get<Escuderia[]>(URLESCUDERIAS);
  }


}
