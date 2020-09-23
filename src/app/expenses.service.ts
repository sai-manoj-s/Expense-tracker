import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { posts} from '../app/posts'

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<posts[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
