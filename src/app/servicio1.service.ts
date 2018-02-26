import { Injectable } from '@angular/core';

@Injectable()
export class Servicio1Service {

  numero: number = 23;
  constructor() { }

  public getNumero(): number {
    return this.numero;
  }
}
