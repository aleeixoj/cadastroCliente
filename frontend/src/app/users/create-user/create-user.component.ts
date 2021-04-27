import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ICreate, RequestCreate } from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass'],
})
export class CreateUserComponent implements OnInit {
  request: ICreate = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
  };

  response!: RequestCreate | any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  save() {
    this.apiService.createClient(this.request).subscribe((res) => {
      this.response = res;
    });
  }
  voltar() {
    window.history.back();
  }
}
