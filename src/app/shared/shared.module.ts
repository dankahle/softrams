import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {RoutingModule} from '../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RoutingModule
  ],
  exports: [
    CoreModule,
    FormsModule,
    RoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class SharedModule { }
