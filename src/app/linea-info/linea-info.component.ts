import { Component, OnInit } from '@angular/core';
import { LineaService } from '../services/linea.service';
import { Observable, Subscription } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-linea-info',
  templateUrl: './linea-info.component.html',
  styleUrls: ['./linea-info.component.css']
})
export class LineaInfoComponent implements OnInit {
  $linea: Observable<any>;
  constructor(private lineaService: LineaService, private router:Router,private activatedRouted:ActivatedRoute) { }

  
  id:string;

  respuesta:Linea[];

  ngOnInit() {

  
    this.id= this.activatedRouted.snapshot.paramMap.get('id');
    this.$linea = this.lineaService.getLinea(this.id);
    this.$linea.subscribe(res =>{
      this.respuesta=res as Linea[];
      console.log(this.respuesta);
    })
    
    //console.log(this.linea);
  }
}
