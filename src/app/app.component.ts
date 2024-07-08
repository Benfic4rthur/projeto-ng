import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  indexPessoaselecionada: number | undefined;
  listPessoas = [
    {nome: 'Arthur', idade: 33},
    {nome: 'Luiz', idade: 28},
    {nome: 'Natacha', idade: 25},
    {nome: 'Bruna', idade: 25},
    {nome: 'Carla', idade: 30},
    {nome: 'Eduardo', idade: 40},
    {nome: 'Fernanda', idade: 35},
    {nome: 'Gabriel', idade: 22},
];

pessoaSelecionada(index: number){
  console.log((index) + 1);
  this.indexPessoaselecionada = index;
}
}
