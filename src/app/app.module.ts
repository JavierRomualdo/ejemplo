import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { AppRouterModule } from './app.routing';
import { Servicio1Service } from './servicio1.service';


@NgModule({
  declarations: [
    AppComponent,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRouterModule
  ],
  providers: [
    Servicio1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
