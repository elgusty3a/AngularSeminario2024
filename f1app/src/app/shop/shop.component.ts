import { Component, OnInit } from '@angular/core';
import { F1ShopService } from '../f1-shop.service';
import { Circuit } from '../circuit-list/Circuit';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  
  // circuit: Circuit[];
  // listaCompras$: Observable<Circuit[]>;
  // listaCompras: Circuit[];
  
  constructor(
    private shopService: F1ShopService,
  ){
    // shopService.listaCompras.subscribe(c => this.listaCompras = c);
    // this.listaCompras$ = shopService.listaCompras.asObservable();
  }

  ngOnInit(): void {
  }
}
