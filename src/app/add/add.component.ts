
import {Component,OnInit, Inject,Input,Output,EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms'
import {ExpensesService} from '../expenses.service'
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;



export interface DialogData {
  date: string;
  desc: string;
  amount:string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
  
})
export class AddComponent implements OnInit {
  @Output() refreshed = new EventEmitter<boolean>();
  date: string;
  desc: string;
  amount:string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '30%',
      data: {date: this.date, desc: this.desc, amount:this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshed.emit(true);
console.log("added")
     
    });
  }
  
  

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'overview.html',
  providers: [
  
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
 
})
export class DialogOverviewExampleDialog {
  date= new FormControl(moment([2017, 0, 1]));

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private exps:ExpensesService) {}
 

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.date)
  }
  add(added:boolean){
    console.log(this.date)
    //console.log(this.data.date._i.date+'-'+this.data.date._i.month+'-'+this.data.date._i.year)
  if(this.data.date._i.date<10)
  {
    var dispdate:string = '0'+this.data.date._i.date
  }
    var newdate= dispdate+'.'+this.data.date._i.month+'.'+this.data.date._i.year
    this.exps.addexp("http://localhost:3000/api/add",{
"date":newdate,
"desc":this.data.desc,
"amount":this.data.amount
}).subscribe()


   
   
  }

}
