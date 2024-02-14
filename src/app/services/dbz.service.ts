import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../dbz/interfaces/charcter.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }


  public charaters:Character[] = [
    {
      id: uuid(),
      name : 'Krilin',
     power : 1000
   },
   {
    id: uuid(),
     name : 'Goku',
     power: 9500
   },
   {
    id: uuid(),
     name : 'Vegeta',
     power: 7500
   }
    ];


    addCharacter( {id, ...character} : Character):void {

        const newCharacter : Character = {id : uuid(), ...character};

      this.charaters.push(newCharacter);

    }

    // onDeleteCharacter(index :number ){
    //  this.charaters.splice(index, 1) ;
    // }
      deleteCharacterById(id:string){
      this.charaters= this.charaters.filter( character => character.id !== id);
      }




}
