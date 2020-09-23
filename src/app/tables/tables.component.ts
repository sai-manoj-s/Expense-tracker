import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ExpensesService} from '../expenses.service'
import { posts} from '../posts'


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements AfterViewInit ,OnInit{
  ELEMENT_DATA: posts[]= [];

constructor (private exps:ExpensesService){

}
ngOnInit(): void {
 this.get();

}
get(){
  this.exps.getPosts().subscribe(data =>this.dataSource.data = data.slice(0,10) as posts[]);



}

  displayedColumns: string[] = ['userID', 'id', 'title', 'body'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
