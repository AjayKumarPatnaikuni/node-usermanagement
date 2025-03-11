import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  createUser() {
    const userData = { username: this.username, password: this.password };
    this.userService.createUser(userData).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
