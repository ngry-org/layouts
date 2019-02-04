import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayersLayoutModule} from './layers/layers-layout.module';
import {MediaLayoutModule} from './media/media-layout.module';
import {PanelLayoutModule} from './panel/panel-layout.module';
import {StackLayoutModule} from './stack/stack-layout.module';
import {StageLayoutModule} from './stage/stage-layout.module';
import {TilesLayoutModule} from './tiles/tiles-layout.module';
import {ViewportLayoutModule} from './viewport/viewport-layout.module';

@NgModule({
  exports: [
    CommonModule,
    LayersLayoutModule,
    MediaLayoutModule,
    PanelLayoutModule,
    StackLayoutModule,
    StageLayoutModule,
    TilesLayoutModule,
    ViewportLayoutModule
  ]
})
export class LayoutsModule {
}
