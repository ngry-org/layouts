import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsModule} from '@ngry/layouts';
import {HeaderComponent} from './header/header.component';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ComponentsModule
  ]
})
export class BlocksModule {
}
