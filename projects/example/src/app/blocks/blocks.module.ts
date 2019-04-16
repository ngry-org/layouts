import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StackLayoutModule, PanelLayoutModule, MediaLayoutModule} from '@ngry/layouts';
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
    StackLayoutModule,
    PanelLayoutModule,
    MediaLayoutModule,
    ComponentsModule
  ]
})
export class BlocksModule {
}
