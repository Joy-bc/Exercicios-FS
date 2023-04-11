import { Component, OnInit } from '@angular/core';
import { RegistroUsuariosService } from './services/registro-usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'S08';

  email: string = '';
  senha: string = '';
  pesquisa: string = '';

  rue: object = {
    nome: 'Ruby "Rue" Bennett',
    imagem: '../assets/Rue_Bennett.webp',
    ator: 'Zendaya Maree Stoermer Coleman',
    descricao:
      'Rue is a 17-year-old recovering drug addict struggling to find her place in the world.',
  };

  jules: object = {
    nome: 'Jules Vaughn',
    imagem: '../assets/Jules_Vaughn.webp',
    ator: 'Hunter Schafer',
    descricao:
      "Eclectic, free-spirited, and kind, Jules is a new girl in town, who quickly catches Rue's attention before their first day of a junior year in high school.",
  };

  elliot: object = {
    nome: 'Elliot',
    imagem: '../assets/Elliot_29.webp',
    ator: 'Dominic Fike',
    descricao:
      'Elliot é um novo amigo de Rue, que se interpõe entre ela e Jules.',
  };

  constructor(private registroUsuarios: RegistroUsuariosService) {}

  ngOnInit(): void {}

  nome() {
    console.log('Funcionou!');
  }

  cadastrar() {
    const usuario = {
      email: this.email,
      senha: this.senha,
    };

    console.log(usuario);
    this.registroUsuarios.salvarCadastro(usuario);

    this.email = '';
    this.senha = '';
  }

  procurar(pesquisa: string) {
    console.log(pesquisa);
  }
}
