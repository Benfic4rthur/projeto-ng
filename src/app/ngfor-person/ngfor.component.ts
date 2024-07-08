import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent {
@Input({required: true}) personName : string = '';
@Input({required: true}) personAge : number = 0;
@Input({required: true}) personIndex : number = 0;
@Input({required: true}) isFirst : boolean = false;
@Input({required: true}) isLast : boolean = false;
@Input({required: true}) isOdd : boolean = false;
@Input({required: true}) isSelected : boolean = false;
@Output() personSelected = new EventEmitter<number>();
pessoaSelecionada(){
  this.personSelected.emit(this.personIndex); 
}
}
