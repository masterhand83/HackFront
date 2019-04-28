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

  nombre:string;
  id:string;

  ngOnInit() {

<<<<<<< HEAD
   
    this.id=this.activatedRouted.snapshot.paramMap.get('id');

    this.lineaService.getLinea(this.id).subscribe(res =>{
      this.lineaService.linea=res as Linea[];
      console.log(this.lineaService.linea);
=======
    this.nombre= this.activatedRouted.snapshot.paramMap.get('nombre');
    this.id= this.activatedRouted.snapshot.paramMap.get('id');
    this.$linea = this.lineaService.getLinea(this.id);
    this.$linea.subscribe(res =>{
      console.log('dfsdf');
      console.log(res);
>>>>>>> aca4d3051f04b73b613c1341f2f397b9c1106593
    })
    console.log(this.$linea)
    //console.log(this.linea);
  }
}
