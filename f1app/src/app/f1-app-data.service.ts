import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circuit } from './circuit-list/Circuit';

const URLCIRCUITS = 'https://apimocha.com/f1appdata/f1ShopTickets';
@Injectable({
  providedIn: 'root'
})
export class F1AppDataService {

  constructor(private http: HttpClient) { }

  public getF1DataCircuits(): Observable<Circuit[]> {
    return this.http.get<Circuit[]>(URLCIRCUITS);
  }



}
