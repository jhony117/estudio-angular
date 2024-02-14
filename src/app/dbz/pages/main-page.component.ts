import { Component } from '@angular/core';
import { Character } from '../interfaces/charcter.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent   {
  //? el constructot sirve para la inyeccion de dependencias
    //*trae todo lo que este en el servicio paa acá
  constructor(private dbzService : DbzService ) {  }


     get characters(): Character[] {

  return [...this.dbzService.charaters];

   }

   onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
   }

   onNewCharacter(character : Character):void{
     this.dbzService.addCharacter(character);
   }

}
