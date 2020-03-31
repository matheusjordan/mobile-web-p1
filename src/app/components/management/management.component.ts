import { Component, OnInit } from '@angular/core';
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

  openEditBeacon() {
    this.dialogRef.open(BeaconComponent, {
      maxWidth: '600px',
      minWidth: '300px',
      width: '80vw',

      maxHeight: '500px',
      minHeight: '300px',
      height: 'fit-content',

      panelClass: 'alert-dialog',

      data: { isEdit: true }
    });

    this.dialogRef.afterAllClosed
      .subscribe(
        () => this.getBeacons()
      );
  }

  openDelete() {
    this.dialogRef.open(AlertComponent, {
      width: 'fit-content',
      height: 'fit-content',

      data: {
        toolbarText: 'Remover',
        okText: 'remover',
        cancelText: 'cancelar',
        contentText: 'Deseja remover o item ?'
      },

      panelClass: 'alert-dialog'
    });
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

  treatClick(action: string) {
    switch (action) {
      case 'editar':
        this.openEditBeacon();
        break;

      case 'remover':
        this.openDelete();
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

  private deleteBeacon(id: any) {
    this.beaconService.delBeacon(id)
      .subscribe(
        res => {
          this.beaconService.beacons
            = this.beaconService.beacons.filter(
              (beacon: any) => {
                return beacon.id !== id
              }
            );
        }
      );
  }
}
