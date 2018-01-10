import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';
import {Sex, User} from './models/user';

@Injectable()
export class Store {
  users: User[] = [
    <User>{id: 1, name: 'dank', age: 40, sex: Sex.male, address: '952 NE Lovell St.', bday: '19830120', notes: 'one two three'},
    <User>{id: 2, name: 'carl', age: 50, sex: Sex.male, address: 'xx 185th Beaverton, OR', bday: '19730120', notes: 'carls notes'}
    ]

  state$ = new BehaviorSubject(this);
  subscribe = this.state$.subscribe.bind(this.state$);

  constructor() {
    console.log('store initialized'); // to verify this only happens once
  }

  pub() {
    this.state$.next(this);
  }

}


