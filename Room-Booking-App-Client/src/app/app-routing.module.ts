import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListunitComponent } from './components/listunit/listunit.component';
import { UnitFormComponent } from './components/unit-form/unit-form.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SearchComponent } from './components/search/search.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'unittest/units', component: ListunitComponent},
  {path: 'unittest/:id/units', component: ListunitComponent},
  {path: 'op', component: UnitFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
