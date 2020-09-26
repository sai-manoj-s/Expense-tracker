import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ExpensesService} from '../expenses.service'
import { posts} from '../posts'


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements AfterViewInit ,OnInit{
  ELEMENT_DATA:posts[]=[]
 added=0;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 
constructor (private exps:ExpensesService){

}
ngOnInit(): void {
  
 
 this.exps._refresh.subscribe(()=>{
   this.get();
 })
 this.get();


}

onRefresh(refresh:boolean){
  console.log("refreshed")
  this.get();
}
get(){
  this.exps.getPosts("http://localhost:3000/api/details?date=6-8-2020").subscribe(data =>{
    
    var n=data.length;
    for(var i=0;i<n;i++){
      data[i]["sno"]=i+1;
    }
    this.dataSource.data = data as posts[]

    console.log(data);
   
  });
  
  
 
}

  displayedColumns: string[] = ['sno','_id', 'date', 'desc', 'amount'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
    




  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  update(element:any){
    console.log(element)
  }
}
