import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListunitComponent } from './components/listunit/listunit.component';
import { UnitFormComponent } from './components/unit-form/unit-form.component';

const routes:Routes = [
  {path: '', redirectTo: 'unittest/units', pathMatch: 'full'},
  {path:'unittest/units', component:ListunitComponent},
  {path: 'unittest/:id/units', component: ListunitComponent},
  {path:'op', component:UnitFormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
