import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsModule} from '@ngry/layouts';

import {LayersMock1Component} from './layers-mock-1/layers-mock-1.component';
import {MediaMock1Component} from './media-mock-1/media-mock-1.component';
import {PanelMock1Component} from './panel-mock-1/panel-mock-1.component';
import {StackMock1Component} from './stack-mock-1/stack-mock-1.component';
import {StageMock1Component} from './stage-mock-1/stage-mock-1.component';
import {TilesMock1Component} from './tiles-mock-1/tiles-mock-1.component';
import {ViewportMock1Component} from './viewport-mock-1/viewport-mock-1.component';
import {BlocksModule} from '../blocks/blocks.module';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  declarations: [
    LayersMock1Component,
    MediaMock1Component,
    PanelMock1Component,
    StackMock1Component,
    StageMock1Component,
    TilesMock1Component,
    ViewportMock1Component
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    BlocksModule,
    ComponentsModule
  ]
})
export class MocksModule {
}
