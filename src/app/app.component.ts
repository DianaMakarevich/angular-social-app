import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  users = [];
  searchStr = '';
  
  constructor(private usersService: UserService){
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users
    });
  }
}
