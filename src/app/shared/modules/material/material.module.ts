import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatInputModule, MatTableModule, MatDialogModule } from '@angular/material';

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
    MatDialogModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
