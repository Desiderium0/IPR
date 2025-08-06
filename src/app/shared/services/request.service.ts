import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/shared/types/todo';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private readonly baseUrl: string = 'http://localhost:5066/api/ToDo';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.baseUrl);
  }

  putPost(body: ToDo): Observable<ToDo> {
    return this.httpClient.post<ToDo>(this.baseUrl, body);
  }
}
