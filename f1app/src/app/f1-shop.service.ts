import { Injectable } from '@angular/core';
import { Circuit } from './circuit-list/Circuit';

@Injectable({
  providedIn: 'root'
})
export class F1ShopService {

  listaCompras: Circuit[] = [];
  constructor() { }
  // agregarAlCarro(circuit: Circuit){
  //   let item: Circuit = this.listaCompras.find((v1) => v1.name == circuit.name);
  //   if(!item){
  //     this.listaCompras.push(circuit);
  //   }
  // }

}
