import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
@Injectable({
  providedIn: 'root'
})
export class LineaService {
  constructor(private http: HttpClient) { }
  getLinea(_id:string): Observable<Linea>{
    return this.http.get<Linea>(`http://${location.hostname}:3000/Linea?_id=${_id}`);
  }
}
