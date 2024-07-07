import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent {
  indexPessoaselecionada: number | undefined;
  listPessoas = [
    {nome: 'Arthur',idade: 33},
    {nome: 'Luiz',idade: 28},
    {nome: 'Natacha',idade: 25},
    {nome: 'Bruna',idade: 25}
];
pessoaSelecionada(index: number){
  console.log((index) + 1);
  this.indexPessoaselecionada = index;
}
}
