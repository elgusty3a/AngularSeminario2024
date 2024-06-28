import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnInit{
  
  books: Book[] = [
    {
      name: 'Juego de Tronos',
      sinopsis: 'Text',
      price: 12000,
      pages: 520,
    image: 'assets/img/juego.png',
    stock: true,
    quantity: 5
 },
 {
  name: 'Choque de Espadas',
  sinopsis: 'Text',
  price: 12200,
  pages: 680,
  image: 'assets/img/choque.png',
  stock: true,
  quantity: 4
 },
 {
  name: 'Tormenta de espadas',
  sinopsis: 'Text',
  price: 14600,
  pages: 884,
  image: 'assets/img/tormenta.png',
  stock: false,
  quantity: 0
 },
 {
  name: 'Festin de Cuervos',
  sinopsis: 'Text',
  price: 10000,
  pages: 460,
  image: 'assets/img/festin.png',
  stock: true,
  quantity: 6
 },
 {
  name: 'Danza de Dragones',
  sinopsis: 'Text',
  price: 13600,
  pages: 1032,
  image: 'assets/img/danza.png',
  stock: true,
  quantity: 2
}
]
constructor(){}

ngOnInit(): void {}

}
