import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { BeaconService } from './beacon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

class Beacon {
  id: number;
  cod: string;
  name: string;
  type: string;
  content: string;
  legends: string;

  constructor(obj: any) {
    this.id = obj.id;
    this.cod = obj.cod;
    this.name = obj.name;
    this.type = obj.type;
    this.content = obj.content;
    this.legends = obj.legends;
  }
}

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

  form: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<any>,
    private fb: FormBuilder,

    private beaconService: BeaconService,
  ) { }

  ngOnInit() {
    this.createForm();

    if (this.data) {
      this.isEdit = this.data.isEdit;
      this.form.patchValue(this.data.beacon);
      this.form.get('cod').disable();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveBeacon() {
    const beacon = new Beacon(this.form.value);

    this.beaconService.beacons.push(beacon);

    // this.beaconService.newBeacon(beacon)
    //   .subscribe(
    //     res => {
    //     }
    //   )

    this.dialogRef.close();
  }

  editBeacon() {
    const beacon = new Beacon({...this.form.value, cod: this.data.beacon.cod });

    this.beaconService.beacons
      = this.beaconService.beacons.map(
        (tempBeacon: any) => {

          if (tempBeacon.cod === beacon.cod) {
            tempBeacon = beacon;
          }

          return tempBeacon;
        }
      )

    // this.beaconService.putBeacon(
    //   () => {
    //     this.getBeacons();
    //   }
    // )
    this.dialogRef.close();
  }

  private createForm() {
    this.form = this.fb.group({
      cod: [null, [Validators.required]],
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      // content: [null, Validators.required],
      legends: [null, [Validators.required]],
    })
  }

}
