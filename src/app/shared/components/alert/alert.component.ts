import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

interface AlertModal {
  okText: string;
  cancelText: string;
  contentText: string;
  toolbarText: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  okText = 'ok';
  cancelText = 'cancel';
  toolbarText = 'alert';
  contentText: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: AlertModal,
    private dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit() {
    if (this.data) {
      this.okText = this.data.okText;
      this.cancelText = this.data.cancelText;
      this.contentText = this.data.contentText;
      this.toolbarText = this.data.toolbarText;
    }
  }

  closeDialog(ok = false) {
    this.dialogRef.close(ok);
  }

}
