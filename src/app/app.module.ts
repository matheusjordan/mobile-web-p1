import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ManagementComponent } from './components/management/management.component';
import { BeaconComponent } from './components/beacon/beacon.component';
import { ComponentsModule } from './shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { BeaconService } from './components/beacon/beacon.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagementComponent,
    BeaconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [
    BeaconService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BeaconComponent
  ]
})
export class AppModule { }
