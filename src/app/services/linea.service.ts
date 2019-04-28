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
  currentLinea = this.socket.fromEvent<Linea>('linea');
  constructor(private http: HttpClient, private socket: Socket) { }
  getLinea(_id: string): Observable<Linea>{
    return this.http.get<Linea>(`http://${location.hostname}:3000/Linea?_id=${_id}`);
  }
  getLine(_id: string){
    this.socket.emit('getLine',_id);
  }
}
