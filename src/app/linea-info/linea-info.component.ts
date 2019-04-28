import { Component, OnInit } from '@angular/core';
import { LineaService } from '../services/linea.service';
import { Observable, Subscription } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
<<<<<<< HEAD
import { startWith } from "rxjs/operators";
=======
import { Router, ActivatedRoute } from '@angular/router';

>>>>>>> 0126343e2eb99d461de263982bd88d0579134fd3

@Component({
  selector: 'app-linea-info',
  templateUrl: './linea-info.component.html',
  styleUrls: ['./linea-info.component.css']
})
export class LineaInfoComponent implements OnInit {
<<<<<<< HEAD
  private line: Subscription;
  linea: Linea;
  constructor(private lineaService: LineaService) { }

  ngOnInit() {
    this.lineaService.getLine('1');
    this.line = this.lineaService.currentLinea.subscribe(res => this.linea = res);
    //console.log(this.linea)
=======
  $LineaObservable: Linea;
  constructor(private lineaService: LineaService, private router:Router,private activatedRouted:ActivatedRoute) { }

  nombre:string;
  id:string;

  ngOnInit() {

   
    this.id=this.activatedRouted.snapshot.paramMap.get('id');

    this.lineaService.getLinea(this.id).subscribe(res =>{
      this.lineaService.linea=res as Linea[];
      console.log(this.lineaService.linea);
    })
>>>>>>> 0126343e2eb99d461de263982bd88d0579134fd3
  }
}
