import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class LineaService {
  //Esto recibe la informacion de la linea.
  linea = this.socket.fromEvent('recieve-linea');

  constructor(private http: HttpClient, private socket: Socket) { }


}
