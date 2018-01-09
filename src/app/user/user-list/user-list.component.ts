import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
