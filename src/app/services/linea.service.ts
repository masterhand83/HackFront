import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})



export class LineaService {
<<<<<<< HEAD

  linea:Linea[];

  constructor(private http: HttpClient) { }
  getLinea(_id:string){
    return this.http.get(`http://${location.hostname}:3000/lines/stations/${_id}`);
=======
<<<<<<< HEAD
  currentLinea = this.socket.fromEvent<Linea>('linea');
  constructor(private http: HttpClient, private socket: Socket) { }
  getLinea(_id: string): Observable<Linea>{
    return this.http.get<Linea>(`http://${location.hostname}:3000/Linea?_id=${_id}`);
=======
  constructor(private http: HttpClient) { }
  getLinea(_id:string): Observable<Linea>{
    return this.http.get<Linea>(`http://${location.hostname}:3000/lines/stations/${_id}`);
>>>>>>> 0126343e2eb99d461de263982bd88d0579134fd3
  }
  getLine(_id: string){
    this.socket.emit('getLine',_id);
>>>>>>> 0d1bfe9ccdd4f088a1d74ba02c8b2b0a52881f14
  }
}
