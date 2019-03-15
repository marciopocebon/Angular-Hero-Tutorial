import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
//import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,
              //private http: HttpClient
              ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Heroes fetched!');
    // Or Fetch json from https endpoint
    // return this.http.get<Hero[]>(url).pipe(
    //       catchError(this.handleError<Hero[]>('getHeroes', []))
    //     );
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));

  }
}
