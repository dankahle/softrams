import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../store/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'dk-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
  '[class.host-user-list-item]': 'true'
  }
})
export class UserListItemComponent implements OnInit {
  @Input('user') user: User;

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
