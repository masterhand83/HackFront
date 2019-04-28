import { Component, OnInit } from '@angular/core';
import { LineaService } from '../services/linea.service';
import { Observable } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-linea-info',
  templateUrl: './linea-info.component.html',
  styleUrls: ['./linea-info.component.css']
})
export class LineaInfoComponent implements OnInit {
  $LineaObservable: Linea;
  constructor(private lineaService: LineaService, private router:Router,private activatedRouted:ActivatedRoute) { }

  nombre:string;
  id:string;

  ngOnInit() {

    this.nombre=this.activatedRouted.snapshot.paramMap.get('nombre');
    this.id=this.activatedRouted.snapshot.paramMap.get('id');

    this.lineaService.getLinea(this.id).subscribe(res =>{
      console.log(res[0]);
      this.$LineaObservable = res[0];
    })
  }
}
