import { Injectable } from '@angular/core';
import { Circuit } from './circuit-list/Circuit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1ShopService {

  // private _listaCompras: Circuit[] = [];

  // listaCompras: BehaviorSubject<Circuit[]> = new BehaviorSubject([]);
  // constructor() { }
  // agregarAlCarro(circuit: Circuit){
  //   let item: Circuit = this._listaCompras.find((v1) => v1.name == circuit.name);
  //   if(!item){
  //     this._listaCompras.push({...circuit});
  //   }else{
  //     item.quantity += circuit.quantity;
  //   }
  //   this.listaCompras.next(this._listaCompras);
  // }

}
