
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charcter.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'

})
export class ListComponent {
// [x: string]: any;

    @Input()
  public characterList : Character[] = [{
    id : '',
    name: 'Truks',
    power: 10
  }];

  // onDeleteId = Idex value : number

  @Output()
 public emitDelete : EventEmitter<string> = new EventEmitter();

//  public idCharacter:number = 0;


deleteCharacterById(id:string):void {
    // TODO: Emitir rl ID del Personaje
      console.log({id});

      //? .emit notifica a los suscriptores, en este caso del index
        //* Todos los componentes suscritos a emitDelete reciviran el valor de index
      this.emitDelete.emit(id);

  }
 }
