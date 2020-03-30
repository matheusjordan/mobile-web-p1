import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BeaconComponent } from '../beacon/beacon.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  displayedColumns = ['cod', 'name', 'age', 'actions'];

  data = [
    { id: 1, cod: '0098', name: "Joao felipe", age: 18, actions: [ 'editar', 'remover' ] },
    { id: 2, cod: '0097', name: "Matheus jodan", age: 15, actions: [ 'editar', 'remover' ] },
    { id: 3, cod: '0096', name: "Maria do bairro", age: 19, actions: [ 'editar', 'remover' ] },
    { id: 4, cod: '0095', name: "Alan kardec", age: 25, actions: [ 'editar', 'remover' ] },
  ];

  constructor(
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {
  }

  openCreateBeacon() {
    this.dialogRef.open(BeaconComponent, {
      maxWidth: '600px',
      minWidth: '300px',
      width: '80vw',

      maxHeight: '500px',
      minHeight: '300px',
      height: '80vh',
    })
  }

}
