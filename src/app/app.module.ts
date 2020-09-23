import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {  MatTableModule } from '@angular/material/table';
import { TablesComponent } from './tables/tables.component';
import {MatSortModule} from '@angular/material/sort';
import { MatToolbarModule} from '@angular/material/toolbar'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
