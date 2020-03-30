import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss']
})
export class BeaconComponent implements OnInit {
  isEdit = false

  selectOptions = [
    'texto',
    'imagem',
    'video'
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {
    if (this.data) {
      this.isEdit = this.data.isEdit;
    }
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }

}
