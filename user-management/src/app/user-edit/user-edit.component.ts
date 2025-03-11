import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: number = 0;
  username: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(this.userId).subscribe(user => {
      this.username = user.username;
      this.password = user.password;
    });
  }

  updateUser() {
    const userData = { username: this.username, password: this.password };
    this.userService.updateUser(this.userId, userData).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
