import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {
  contagem = 0;
  a: number = 10;
  b: number = 15;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {}

  getSoma() {
    return this.calculatorService.somar(this.a, this.b);
  }

  getDiminuir() {
    return this.calculatorService.diminuir(this.a, this.b);
  }

  getMulti() {
    return this.calculatorService.multiplicar(this.a, this.b);
  }

  getDivi() {
    return this.calculatorService.dividir(this.a, this.b);
  }
  add() {
    this.contagem++;
  }

  remove() {
    this.contagem--;
  }
}
