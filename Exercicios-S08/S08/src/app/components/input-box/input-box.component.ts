import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent {
  @Input() titulo: string = '';
  @Input() tipo: string = '';
  @Input() mensagem: string = '';
}
