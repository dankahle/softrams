import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {UserListComponent} from '../user/user-list/user-list.component';
import {Store} from '../store/store';
import {UserDetailComponent} from '../user/user-detail/user-detail.component';
import {UserEditComponent} from '../user/user-edit/user-edit.component';
import {StoreModule} from '../store/store.module';

const appRoutes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
    children: [
      {
        path: ':id/edit',
        component: UserEditComponent,
      },
      {
        path: ':id',
        component: UserDetailComponent,
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
    StoreModule,
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
