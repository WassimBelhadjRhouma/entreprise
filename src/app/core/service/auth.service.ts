import { Injectable } from '@angular/core';
import { IuserConnect, User } from 'src/app/shared/models/user';
import { AuthPagesService } from 'src/app/core/service/authPages.service';

@Injectable()
export class AuthService {
  listUsers: User[] = [];


  constructor(private authPagesService: AuthPagesService) {
    const data = localStorage.getItem('users');
    this.listUsers = data ? JSON.parse(data) : [];
  }

  login(data: IuserConnect): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = this.listUsers.find((item) => {
        return item.email === data.email && item.password === data.password;
      });
      if (user) {
        const fullName = new User(user).getFullName();
        this.authPagesService.sendUser(fullName);
        resolve('welcom back ' + fullName);
      }
      else {
        reject('bad credential');
      }
    });
  }
  register(data: User): Promise<any> {
    return new Promise((resolve, reject) => {
      const index = this.listUsers.findIndex((item) => {
        return item.email === data.email;
      });
      if (index !== -1) {
        reject('user already exist');
      } else {
        this.listUsers.push(data);
        localStorage.setItem('users', JSON.stringify(this.listUsers));
        resolve('user addedd');
      }
    });
  }
}
