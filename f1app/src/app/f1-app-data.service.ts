import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Circuit } from './circuit-list/Circuit';
import { Pilotos } from './pilotos-list/Pilotos';
import { F1MockService } from './f1-mock.service';

// const URLPILOTOS = 'https://apimocha.com/f1appdata/pilotos';
// const URLCIRCUITS = 'https://apimocha.com/f1appdata/circuits';

// const URLCIRCUITS = 'https://f1app.free.beeceptor.com/circuitos';
// const URLPILOTOS = 'https://f1app.free.beeceptor.com/pilotos';

// const URLCIRCUITS = 'https://649b2200bf7c145d023a0d02.mockapi.io/f1AppData/pedido';

// const URLCIRCUITS = 'https://mp6cbc3336bb1cd859a4.free.beeceptor.com/dataCircuitsJSON';
@Injectable({
  providedIn: 'root'
})
export class F1AppDataService {
  /**
   * 
   * -------------------------modo mock
   * 
   */

  constructor(
    private datos: F1MockService
  ){}

  public f1DataCircuit(){
    return this.datos.getMockDataCircuits;
  };
  public f1DataPilotos(){
    return this.datos.getMockDataPilotos;
  };

  // constructor(private http: HttpClient) { }

  // public getF1DataCircuits(): Observable<Circuit[]> {
  //   // return this.http.get<Circuit[]>(URLCIRCUITS);
  //   return this.http.get<Circuit[]>(URLCIRCUITS).pipe(
  //     tap((circuits: Circuit[])=>circuits.forEach(beer => beer.quantity = 0))
  //   );
  // }
  // public getF1DataPilotos(): Observable<Pilotos[]> {
  //   // return this.http.get<Circuit[]>(URLCIRCUITS);
  //   return this.http.get<Pilotos[]>(URLPILOTOS).pipe(
  //     tap((pilotos: Pilotos[])=>console.log(pilotos))
  //   );
  // }


}
