import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { IUser, IBusca } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
})
export class UsersComponent implements OnInit {
  requestBusca: IBusca = {
    email: '',
  };
  responseUsers!: IUser | any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.apiService.getUsers().subscribe((res) => (this.responseUsers = res));
  }
  buscar() {
    this.apiService.findClient(this.requestBusca).subscribe((res) => {
      this.responseUsers = res;
    });
  }
}
