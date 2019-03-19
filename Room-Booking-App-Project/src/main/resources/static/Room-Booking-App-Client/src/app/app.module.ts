import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListunitComponent } from './components/listunit/listunit.component';
import { UnitFormComponent } from './components/unit-form/unit-form.component';
import { RouterModule, Routes } from '@angular/router';
import { UnitService } from './shared_service/unit.service';
import { HttpModule } from '@angular/http';

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
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
