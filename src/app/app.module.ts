import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {  MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator'
import { TablesComponent } from './tables/tables.component';
import {MatSortModule} from '@angular/material/sort';
import { MatToolbarModule} from '@angular/material/toolbar'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatInputModule} from '@angular/material/input';
import { TotalComponent } from './total/total.component';
import {MatButtonModule} from '@angular/material/button';
import { AddComponent ,DialogOverviewExampleDialog} from './add/add.component';


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    HeaderComponent,
    MonthPickerComponent,
    TotalComponent,
    AddComponent,
    DialogOverviewExampleDialog
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule



  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent],
  entryComponents:[DialogOverviewExampleDialog]
})
export class AppModule { }
