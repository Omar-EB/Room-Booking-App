import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListunitComponent } from './components/listunit/listunit.component';
import { UnitFormComponent } from './components/unit-form/unit-form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
    {path:'', component:ListunitComponent},
    {path:'op', component:UnitFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ListunitComponent,
    UnitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
