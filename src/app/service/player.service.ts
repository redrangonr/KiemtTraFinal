import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "../model/player";
import {Observable} from "rxjs";
const URL_API = 'http://localhost:3001/players';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private HttpClient: HttpClient) { }
  getAll(): Observable<Player[]> {
    return this.HttpClient.get<Player[]>(URL_API);
  }
  getById(id: string): Observable<Player[]>{
    return this.HttpClient.get<Player[]>(URL_API + `/${id}`);
  }
  createBook(book: Player): Observable<Player> {
    return this.HttpClient.post(URL_API, book);
  }
  deleteBook(id: string): Observable<Player> {
    return this.HttpClient.delete(URL_API + `/${id}`);
  }
  updateBook(id: string, player: Player): Observable<Player> {
    return this.HttpClient.put(URL_API + `/${id}`, player);
  }
}
