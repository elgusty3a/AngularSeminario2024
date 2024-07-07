import { Component, OnInit } from '@angular/core';
import { F1ShopService } from '../f1-shop.service';
import { Circuit } from '../circuit-list/Circuit';
import { Observable } from 'rxjs';
import { F1MockService } from '../f1-mock.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.scss'
})
export class CarroComponent implements OnInit{
  
  // listaCompras: Circuit[];
  listaCompras$: Observable<Circuit[]>;
  

  constructor(
    private shopService: F1ShopService,
    private f1MockService: F1MockService,
  ){
    this.listaCompras$ = shopService.listaCompras.asObservable();
  }

  ngOnInit(): void {
    
  }

  
  quitarDeCarro(circuit: Circuit) : void{
    this.shopService.quitarDeCarro(circuit);
  //   circuit.stock += circuit.quantity;
  //   circuit.quantity = 0;
  //   this.f1MockService.getMockDataCircuits();
  // }
  // reloadPage() {
  //   window.location.reload();
  }

}
