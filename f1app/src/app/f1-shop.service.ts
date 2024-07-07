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
    let item = this._listaCompras.find((v1) => v1.name == circuit.name);
    if(!item){
      this._listaCompras.push({...circuit});
    }else{
      item.quantity += circuit.quantity;
    }
    this.listaCompras.value[0].stock -= circuit.quantity;
    this.listaCompras.next(this._listaCompras);
    this.sumaCarro=0;
    this.sumarPedido();    
  }
  quitarDeCarro(circuit: Circuit){
    let item = this._listaCompras.find((v1) => v1.name == circuit.name);
    if(item){
      this._listaCompras = this._listaCompras.filter(i => i != item);
    }
    this.listaCompras.next(this._listaCompras);
    this.sumaCarro=0;
    this.sumarPedido();
  }
  public sumaCarro = 0;
  sumarPedido():number{
    let sum=0;
    this._listaCompras.forEach(circuit => {
      sum += circuit.quantity * circuit.price
    });
    console.log(sum);
    this.sumaCarro += sum;
    return sum;
  }

  total(){
    this.sumaCarro;
  }
  
  

}
