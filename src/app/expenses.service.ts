import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  Subject } from 'rxjs';
import { posts} from '../app/posts'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }
  private refresh = new Subject<void>();

  get _refresh(){
    return this.refresh
  }

 

  getPosts(url:string){
    return this.http.get<posts[]>(url)
  }

  addexp(url:string,body:any){
    return this.http.post(url,body).pipe(tap(()=>{
      this.refresh.next();
    }))

  }

}
