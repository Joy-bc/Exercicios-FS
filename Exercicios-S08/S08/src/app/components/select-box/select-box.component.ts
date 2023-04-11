import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent {
  @Input() titulo: string = '';
  @Input() profUm: string = '';
  @Input() profDois: string = '';
  @Input() profTres: string = '';
  @Input() profQuatro: string = '';
}
