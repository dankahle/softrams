import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from '../store/store';
import {StoreModule} from '../store/store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule
  ],
  exports: [StoreModule]
})
export class CoreModule { }
