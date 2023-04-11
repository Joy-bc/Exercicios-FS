import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent {
  nome: string = '';
  mensagem: string = 'Este campo está incorreto!';

  @Input() titulo: string = '';
  @Input() tipo: string = '';
}
