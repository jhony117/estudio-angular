import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {MainPageComponent} from './pages/main-page.component'
import { ListComponent } from './components/list/list.component';
import { formComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    formComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
