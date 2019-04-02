import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnitService } from './services/unit.service';
import { ApiService } from './services/api.service';

import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SearchComponent } from './components/search/search.component';
import { ListunitComponent } from './components/listunit/listunit.component';
import { UnitFormComponent } from './components/unit-form/unit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListunitComponent,
    UnitFormComponent,
    HomeComponent,
    EmployeeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [UnitService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
