import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreate, IUser, IBusca } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3333/getAll';
  private urlPost = 'http://localhost:3333/create';
  private urlBusca = 'http://localhost:3333/getClient';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser | any[]> {
    return this.http.get<IUser>(this.url);
  }
  createClient(request: ICreate): Observable<ICreate | any[]> {
    return this.http.post<ICreate>(this.urlPost, request);
  }
  findClient(requestBusca: IBusca): Observable<IBusca | any> {
    return this.http.post<IBusca>(this.urlBusca, requestBusca);
  }
}
