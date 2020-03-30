import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<UserType>;
  public user: Observable<UserType>;

  constructor() {
    this.userSubject = new BehaviorSubject('admin');
    this.user = this.userSubject.asObservable();
  }

  public setUser(user: UserType) {
    this.userSubject.next(user);
  }

}

export type UserType = 'admin' | 'user';
