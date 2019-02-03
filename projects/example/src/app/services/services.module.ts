import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteTitleService} from './route-title/route-title.service';

@NgModule({
  providers: [
    RouteTitleService
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule {
}
