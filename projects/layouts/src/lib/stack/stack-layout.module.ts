import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StackComponent} from './stack/stack.component';
import {StackBlockComponent} from './stack-block/stack-block.component';
import {StackBodyComponent} from './stack-body/stack-body.component';

@NgModule({
  declarations: [StackComponent, StackBlockComponent, StackBodyComponent],
  exports: [StackComponent, StackBlockComponent, StackBodyComponent],
  imports: [
    CommonModule
  ]
})
export class StackLayoutModule {
}
