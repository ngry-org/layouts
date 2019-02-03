import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportComponent } from './viewport/viewport.component';

@NgModule({
  declarations: [ViewportComponent],
  exports: [ViewportComponent],
  imports: [
    CommonModule
  ]
})
export class ViewportLayoutModule { }
