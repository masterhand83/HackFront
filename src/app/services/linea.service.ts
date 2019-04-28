import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
@Injectable({
  providedIn: 'root'
})



export class LineaService {

  linea:Linea[];

  constructor(private http: HttpClient) { }
  getLinea(_id:string){
    return this.http.get(`http://${location.hostname}:3000/lines/stations/${_id}`);
  }
}
