import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
