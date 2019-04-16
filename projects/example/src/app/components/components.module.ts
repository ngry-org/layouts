import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    CommonModule
  ]
})
export class ComponentsModule {
}
