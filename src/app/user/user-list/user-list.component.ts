import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '../../store/store';
import {User} from '../../store/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'dk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent {
  users: User[];
  selectedUser: User;

  constructor(store: Store, public router: Router) {
    store.subscribe(state => this.users = state.users);
  }

  selectUser(user: User) {
    console.log('selectUser');
    this.selectedUser = user;
    this.router.navigateByUrl('/user/' + user.id);
  }
}
