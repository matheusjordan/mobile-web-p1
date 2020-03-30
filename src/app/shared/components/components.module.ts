import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { MaterialModule } from '../modules/material/material.module';



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class ComponentsModule { }
