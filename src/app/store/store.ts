import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class Store {

  state$ = new BehaviorSubject(this);
  subscribe = this.state$.subscribe.bind(this);

  constructor() {
    console.log('store initialized'); // to verify this only happens once
  }

  pub() {
    this.state$.next(this);
  }

}


