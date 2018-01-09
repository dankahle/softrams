import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from '../store/store';

@NgModule({
  imports: [
    CommonModule,
    Store
  ],
  exports: [Store]
})
export class CoreModule { }
