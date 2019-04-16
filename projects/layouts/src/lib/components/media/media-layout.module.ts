import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaComponent} from './media/media.component';
import {MediaDetailsComponent} from './media-details/media-details.component';
import {MediaActionComponent} from './media-action/media-action.component';
import {MediaContentComponent} from './media-content/media-content.component';

@NgModule({
  declarations: [MediaComponent, MediaContentComponent, MediaDetailsComponent, MediaActionComponent],
  exports: [MediaComponent, MediaContentComponent, MediaDetailsComponent, MediaActionComponent],
  imports: [
    CommonModule
  ]
})
export class MediaLayoutModule {
}
