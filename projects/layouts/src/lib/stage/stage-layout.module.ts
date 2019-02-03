import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage/stage.component';

@NgModule({
  declarations: [StageComponent],
  exports: [StageComponent],
  imports: [
    CommonModule
  ]
})
export class StageLayoutModule { }
