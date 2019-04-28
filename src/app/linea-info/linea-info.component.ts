import { Component, OnInit } from '@angular/core';
import { LineaService } from '../services/linea.service';
import { Observable } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';

@Component({
  selector: 'app-linea-info',
  templateUrl: './linea-info.component.html',
  styleUrls: ['./linea-info.component.css']
})
export class LineaInfoComponent implements OnInit {
  $LineaObservable: Linea;
  constructor(private lineaService: LineaService) { }

  ngOnInit() {
    this.lineaService.getLinea('linea_2').subscribe(res =>{
      console.log(res[0]);
      this.$LineaObservable = res[0];
    })
  }
}
