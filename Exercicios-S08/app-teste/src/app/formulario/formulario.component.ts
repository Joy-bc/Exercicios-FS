import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  nome = '';
  mensagem = 'Digite o seu nome aqui!';

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {}

  resetar() {
    console.log('Resetou');
  }

  enviar() {
    this.generalService.enviarCadastrado();
    console.log('Enviou');
  }
}
