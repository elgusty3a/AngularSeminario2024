import { Injectable } from '@angular/core';
import { Circuit } from './circuit-list/Circuit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1ShopService {

  private _listaCompras:Circuit[] = [];

  listaCompras: BehaviorSubject<Circuit[]> = new BehaviorSubject(this._listaCompras);
  

  constructor() { }

  agregarAlCarro(circuit: Circuit){
    console.log(this.listaCompras);
    
    let item = this._listaCompras.find((v1) => v1.name == circuit.name);
    if(!item){
      this._listaCompras.push({...circuit});
    }else{
      item.quantity += circuit.quantity;
    }
    this.listaCompras.value[0].stock -= circuit.quantity;
    this.listaCompras.next(this._listaCompras);
    
    console.log(this._listaCompras);
  }
  quitarDeCarro(circuit: Circuit){
  //   console.log(this.listaCompras);
    let item = this._listaCompras.find((v1) => v1.name == circuit.name);
    if(item){
      this._listaCompras = this._listaCompras.filter(i => i != item);
    }
    this.listaCompras.next(this._listaCompras);
  //   // this.listaCompras.value[0].stock += circuit.quantity;
    
  //   console.log(this._listaCompras);
  }

}
