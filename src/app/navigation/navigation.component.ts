import { Component, OnInit } from '@angular/core';
import { UserService, UserType } from '../user.service';

@Component({
  selector: 'tcs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: UserType = 'user';

  constructor(private userService: UserService) {
    this.userService.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  setUser(user: UserType) {
    this.userService.setUser(user);
  }


}
