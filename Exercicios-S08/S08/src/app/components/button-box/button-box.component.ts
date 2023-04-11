import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss'],
})
export class ButtonBoxComponent {
  @Input() nome: string = '';
  @Input() tipo: string = '';

  @Output() acao: EventEmitter<any> = new EventEmitter();
}
