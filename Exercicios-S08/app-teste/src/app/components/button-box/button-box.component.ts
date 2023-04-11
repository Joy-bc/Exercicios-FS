import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss'],
})
export class ButtonBoxComponent implements OnInit {
  @Output() clicou: EventEmitter<any> = new EventEmitter();

  @Input() titulo: string = '';
  @Input() tipo: string = '';
  @Input() bg: string = '';

  constructor() {}

  ngOnInit(): void {}

  clicouFunction() {
    this.clicou.emit();
  }
}
