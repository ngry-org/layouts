import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaComponent} from './media/media.component';
import {MediaDetailsComponent} from './media-details/media-details.component';
import {MediaActionComponent} from './media-action/media-action.component';

@NgModule({
  declarations: [MediaComponent, MediaDetailsComponent, MediaActionComponent],
  exports: [MediaComponent, MediaDetailsComponent, MediaActionComponent],
  imports: [
    CommonModule
  ]
})
export class MediaLayoutModule {
}
