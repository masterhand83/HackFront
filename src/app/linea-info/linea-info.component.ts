import { Component, OnInit } from '@angular/core';
import { LineaService } from '../services/linea.service';
import { Observable, Subscription } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { startWith } from "rxjs/operators";

@Component({
  selector: 'app-linea-info',
  templateUrl: './linea-info.component.html',
  styleUrls: ['./linea-info.component.css']
})
export class LineaInfoComponent implements OnInit {
  private line: Subscription;
  linea: Linea;
  constructor(private lineaService: LineaService) { }

  ngOnInit() {
    this.lineaService.getLine('1');
    this.line = this.lineaService.currentLinea.subscribe(res => this.linea = res);
    //console.log(this.linea)
  }
}
