import { Component, OnInit } from '@angular/core';
import { F1ShopService } from '../f1-shop.service';
import { Circuit } from '../circuit-list/Circuit';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.scss'
})
export class CarroComponent implements OnInit{
  
  circuit: Circuit[];
  

  constructor(private carro: F1ShopService){}

  ngOnInit(): void {
  }

}
