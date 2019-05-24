import { Component, OnInit, OnDestroy } from '@angular/core';
import { LineaService } from '../services/linea.service';
import { Observable, Subscription } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-linea-info',
  templateUrl: './linea-info.component.html',
  styleUrls: ['./linea-info.component.css']
})
export class LineaInfoComponent implements OnInit, OnDestroy {
  $linea: Observable<any>;
  constructor(public lineaService: LineaService, private router:Router,private activatedRouted:ActivatedRoute) { }


  id:string;
  current_estacion;
  ngOnInit() {
    this.id= this.activatedRouted.snapshot.paramMap.get('id');
    this.lineaService.getLinea(this.id);
    this.$linea = this.lineaService.linea;
    //console.log(this.linea);
    this.lineaService.joinRoom(this.id);
    this.lineaService.view.subscribe(res => {
       this.lineaService.getLinea(this.id);
       
    })

    this.current_estacion = {
      name: 'Por favor, seleccione una estación.',
      idLine: 2,
      data: [
        { way: 'Estacion 1', date: '2019-05-17T22:21:48.850Z', crowdPercent: .24},
        { way: 'Estacion 2', date: '2019-05-17T22:21:48.850Z', crowdPercent: .50 }
      ]
    }

  }
  ngOnDestroy(){
    this.lineaService.leaveRoom(this.id);
  }
  openLinea(linea,index: number){
    //console.log(linea);
    this.current_estacion = linea;
  }
  parsePercent(value){
    return (value.crowdPercent *100)+'%';
  }
  getColor(value){
    let val = value.crowdPercent * 100;
    if (val >= 75) {
      return '#c90000';
    }else if (val < 75 && val >= 25){
      return '#ffd000';
    }else{
      return '#29af00';
    }
  }
}
