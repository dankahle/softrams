import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import {SharedModule} from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserListComponent, UserDetailComponent, UserEditComponent, UserListItemComponent],
  exports: [SharedModule, UserListComponent, UserDetailComponent, UserEditComponent]
})
export class UserModule { }
