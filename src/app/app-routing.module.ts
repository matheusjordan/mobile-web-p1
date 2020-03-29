import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManagementComponent } from './components/management/management.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'management', component: ManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
