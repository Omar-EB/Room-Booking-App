import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListunitComponent } from './components/listunit/listunit.component';
import { UnitFormComponent } from './components/unit-form/unit-form.component';
import { UnitService } from './services/unit.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListunitComponent,
    UnitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [UnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
