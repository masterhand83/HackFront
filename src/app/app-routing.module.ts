import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LineaInfoComponent } from './linea-info/linea-info.component';

const routes: Routes = [
  {path: '', redirectTo:'start'},
  {path: 'start', component: StartComponent},
  {path: 'line', component: LineaInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
