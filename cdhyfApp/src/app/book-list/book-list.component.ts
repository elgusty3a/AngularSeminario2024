import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit{
  
  books: Book[] = [
    {
      name: 'Juego de Tronos',
      sinopsis: 'Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddars Stark, señor de Invernalia, deja sus dominios para unirse a la corte del rey Robert Baratheon el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark desempeñará el cargo de Mano del Rey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida... y la de los suyos. En un mundo cuyas estaciones duran décadas y en el que retazos de una magia inmemorial y olvidada surgen en los rincones más sombrios y maravillosos, la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapa en sus fauces a los personajes... y al lector.',
      price: 12000,
      pages: 520,
      image: 'assets/img/juego.png',
      offer: true,
      quantity: 5
   },
   {
    name: 'Choque de Espadas',
    sinopsis: 'Un cometa del color de la sangre hiende el cielo, cargado de malos augurios. Y hay razones sobradas para pensar así: los Siete Reinos se ven sacudidos por las luchas intestinas entre los nobles por la sucesión al Trono de Hierro. En la otra orilla del mar Angosto, la princesa Daenerys Targaryen conduce a su pueblo de jinetes salvajes a través del desierto. Y en los páramos helados del norte, más allá del Muro, un ejército implacable avanza hacia un territorio asolado por el caos y las guerras fratricidas. George R.R. Martin, con pulso firme y enérgico, nos deleita con un brillante despliegue de personajes, engranando una trama rica, densa y sorprendente. Nos vuelve testigos de luchas fratricidas, intrigas y traiciones palaciegas en una tierra maldita por la guerra, donde fuerzas ocultas se alzan de nuevo y acechan para reinar en las noches del largo invierno que se avecina.',
    price: 12200,
    pages: 680,
    image: 'assets/img/choque.png',
    offer: true,
    quantity: 4
   },
   {
    name: 'Tormenta de espadas',
    sinopsis: 'Las huestes de los fugaces reyes de Poniente, descompuestas en hordas, asolan y esquilman una tierra castigada por la guerra e indefensa ante un invierno que se anuncia inusitadamente crudo. Las alianzas nacen y se desvanecen como volutas de humo bajo el viento helado del Norte. Ajena a las intrigas palaciegas, e ignorante del auténtico peligro en ciernes, la Guardia de la Noche se ve desbordada por los salvajes. Y al otro lado del mundo, Daenerys Targaryen intenta reclutar en las Ciudades Libres un ejército con el que desembarcar en su tierra. Martin hace que lo imposible parezca sencillo. Tormenta de espadas confirma Canción de Hielo y Fuego como un hito de la fantasía épica. Brutal y poética, conmovedora y cruel, la magia de Martin, como la del mundo de Poniente, necesita apenas una pincelada para cautivar al lector, hacerlo reír y llorar, y conseguir que el asombro ceda paso a la más profunda admiración por la serie.',
    price: 14600,
    pages: 884,
    image: 'assets/img/tormenta.png',
    offer: false,
    quantity: 0
   },
   {
    name: 'Festin de Cuervos',
    sinopsis: 'Mientras los vientos del otoño desnudan los árboles, las últimas cosechas se pudren en los pocos campos que no han sido devastados por la guerra, y por los ríos teñidos de rojo bajan cadáveres de todos los blasones y estirpes. Y aunque casi todo Poniente yace extenuado, en diversos rincones florecen nuevas e inquietantes intrigas que ansían nutrirse de los despojos de un reino moribundo. George R.R. Martin continúa sumando hordas de seguidores incondicionales mientras desgrana, con pulso firme y certero, una de las experiencias literarias más ambiciosas y apasionantes que se hayan propuesto nunca en el terreno de la fantasía. Festín de cuervos, como la calma que precede a la tempestad, desarrolla nuevos personajes y tramas de un retablo tenso y sobrecogedor.',
    price: 10000,
    pages: 460,
    image: 'assets/img/festin.png',
    offer: true,
    quantity: 6
   },
   {
    name: 'Danza de Dragones',
    sinopsis: 'Daenerys Targaryen intenta mitigar el rastro de sangre y fuego que dejó en las Ciudades Libres e intenta erradicar la esclavitud de Meereen. Mientras, un enano parricida, un príncipe de incógnito, un capitán implacable y un enigmático caballero acuden a la llamada de los dragones desde el otro lado del mar Angosto, ajenos al peligro que se cierne sobre el Norte, y que solo las menguadas huestes de uno de los reyes en discordia y la Guardia de la Noche se aprestan a afrontar.',
    price: 13600,
    pages: 1032,
    image: 'assets/img/danza.png',
    offer: true,
    quantity: 2
  }
]
constructor(){}

ngOnInit(): void {}



}
