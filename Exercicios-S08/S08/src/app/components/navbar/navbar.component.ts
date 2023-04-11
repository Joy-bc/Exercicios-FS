import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  pesquisa: string = '';

  @Output() pesquisar: EventEmitter<any> = new EventEmitter();

  enviarParam() {
    this.pesquisar.emit(this.pesquisa);
  }
}
