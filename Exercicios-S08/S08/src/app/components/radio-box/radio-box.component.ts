import { Component, Input } from '@angular/core';

@Component({
  selector: 'radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.scss'],
})
export class RadioBoxComponent {
  @Input() nome: string = '';
  @Input() valor: string = '';
  @Input() id: string = '';
}
