import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {UserListComponent} from '../user/user-list/user-list.component';
import {Store} from '../store/store';
import {UserDetailComponent} from '../user/user-detail/user-detail.component';
import {UserEditComponent} from '../user/user-edit/user-edit.component';

const appRoutes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
    children: [
      {
        component: UserDetailComponent,
        matcher: (url: UrlSegment[]) => {
          console.log(url);
          return url.length === 1 && url[0].path.indexOf('mode=detail') !== -1 ? ({consumed: url}) : null;
        }
      },
      {
        component: UserEditComponent,
        matcher: (url: UrlSegment[]) => {
          console.log(url);
          return url.length === 1 &&
          (url[0].path.indexOf('mode=edit') !== -1 || url[0].path.indexOf('mode=add') !== -1) ? ({consumed: url}) : null;
        }
      },
    ]
  },
  { path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    Store,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule {
  // todo: some routing helper methods to update store routing info for pub/sub of routing events and parameters
}
