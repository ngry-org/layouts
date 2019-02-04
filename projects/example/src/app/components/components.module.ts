import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsModule} from '@ngry/layouts';
import {BlockComponent} from './block/block.component';
import {TextLineComponent} from './text-line/text-line.component';

@NgModule({
  declarations: [
    BlockComponent,
    TextLineComponent
  ],
  exports: [
    BlockComponent,
    TextLineComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class ComponentsModule {
}
