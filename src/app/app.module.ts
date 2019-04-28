import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { LineaInfoComponent } from './linea-info/linea-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from "@angular/forms";
import { LineaService } from './services/linea.service';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
const config: SocketIoConfig = {url: `http://${location.hostname}:3000`, options: {}};
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LineaInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [LineaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
