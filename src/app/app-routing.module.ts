import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecordTableComponent } from './record-table/record-table.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'record-table', component: RecordTableComponent },
  // Add other routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
