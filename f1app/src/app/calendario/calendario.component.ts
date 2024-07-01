import { Component, OnInit, Input } from '@angular/core';
import { Circuit } from '../circuit-list/Circuit';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit{
  constructor(){};
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  circuit: Circuit;
}
