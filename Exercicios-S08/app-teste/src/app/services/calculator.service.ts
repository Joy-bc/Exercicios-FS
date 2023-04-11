import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  somar(a: number, b: number) {
    return a + b;
  }

  diminuir(a: number, b: number) {
    return a - b;
  }

  multiplicar(a: number, b: number) {
    return a * b;
  }

  dividir(a: number, b: number) {
    return a / b;
  }
}
