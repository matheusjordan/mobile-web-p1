import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BeaconComponent } from '../beacon/beacon.component';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { BeaconService } from '../beacon/beacon.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  displayedColumns = ['cod', 'name', 'type', 'actions'];

  data = [];

  constructor(
    private dialogRef: MatDialog,

    private beaconService: BeaconService
  ) { }

  ngOnInit() {
    this.getBeacons();
  }

  openCreateBeacon() {
    this.dialogRef.open(BeaconComponent, {
      maxWidth: '600px',
      minWidth: '300px',
      width: '80vw',

      maxHeight: '500px',
      minHeight: '300px',
      height: 'fit-content',

      panelClass: 'alert-dialog'
    });

    this.dialogRef.afterAllClosed
      .subscribe(
        () => this.getBeacons()
      );
  }

  openEditBeacon(beacon: any) {
    this.dialogRef.open(BeaconComponent, {
      maxWidth: '600px',
      minWidth: '300px',
      width: '80vw',

      maxHeight: '500px',
      minHeight: '300px',
      height: 'fit-content',

      panelClass: 'alert-dialog',

      data: { isEdit: true, beacon }
    });

    this.dialogRef.afterAllClosed
      .subscribe(
        () => this.getBeacons()
      );
  }

  openDelete(beacon: any) {
    this.dialogRef.open(AlertComponent, {
      width: 'fit-content',
      height: 'fit-content',

      data: {
        toolbarText: 'Remover',
        okText: 'remover',
        cancelText: 'cancelar',
        contentText: 'Deseja remover o item ?'
      },

      panelClass: 'alert-dialog',
      id: '666'
    });

    this.dialogRef.getDialogById('666').afterClosed()
      .subscribe(
        (res: any) => {
          if (res) {
            this.beaconService.beacons;
            this.deleteBeacon(beacon);
          }
        }
      )
  }

  openExit() {
    this.dialogRef.open(AlertComponent, {
      width: 'fit-content',
      height: 'fit-content',

      data: {
        toolbarText: 'Sair',
        okText: 'sair',
        cancelText: 'cancelar',
        contentText: 'Deseja sair da plataforma ?'
      },

      panelClass: 'alert-dialog'
    });
  }

  treatClick(action: string, beacon: any) {
    switch (action) {
      case 'editar':
        this.openEditBeacon(beacon);
        break;

      case 'remover':
        this.openDelete(beacon);
        break;
    }
  }

  private getBeacons() {
    this.data = this.beaconService.beacons
      .map(
        (beacon: any) => {
          return {...beacon, actions: ['editar', 'remover']}
        }
      );
  }

  private deleteBeacon(beacon: any) {
    this.beaconService.beacons
      = this.beaconService.beacons.filter(
        (tempBeacon: any) => {
          return tempBeacon.cod !== beacon.cod
        }
      );

    this.getBeacons();

    // this.beaconService.delBeacon(id)
    //   .subscribe(
    //     res => {
    //     }
    //   );
  }
}
