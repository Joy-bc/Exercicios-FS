import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsuariosService {
  constructor() {}

  salvarCadastro(usuario: object) {
    let usuarios = new Array<any>();

    if (localStorage.getItem('usuarios')) {
      usuarios = JSON.parse(localStorage.getItem('usuarios') as string);
    }
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
