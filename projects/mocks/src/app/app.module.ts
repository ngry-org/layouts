import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  LayersLayoutModule,
  MediaLayoutModule,
  PanelLayoutModule,
  StackLayoutModule,
  StageLayoutModule,
  ViewportLayoutModule
} from 'layouts';

import {AppComponent} from './app.component';
import {BlockComponent} from './components/block/block.component';
import {MediaMockComponent} from './mocks/media-mock/media-mock.component';
import {LayoutsZoneComponent} from './zones/layouts-zone/layouts-zone.component';
import {TextLineComponent} from './components/text-line/text-line.component';
import {PanelMockComponent} from './mocks/panel-mock/panel-mock.component';
import {ViewportMockComponent} from './mocks/viewport-mock/viewport-mock.component';
import {StageMockComponent} from './mocks/stage-mock/stage-mock.component';
import {StackMockComponent} from './mocks/stack-mock/stack-mock.component';
import { LayersMockComponent } from './mocks/layers-mock/layers-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    MediaMockComponent,
    LayoutsZoneComponent,
    TextLineComponent,
    PanelMockComponent,
    ViewportMockComponent,
    StageMockComponent,
    StackMockComponent,
    LayersMockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayersLayoutModule,
    MediaLayoutModule,
    PanelLayoutModule,
    StackLayoutModule,
    StageLayoutModule,
    ViewportLayoutModule,
    RouterModule.forRoot([
      {
        path: 'layouts',
        component: LayoutsZoneComponent,
        children: [
          {
            path: 'layers',
            component: LayersMockComponent
          },
          {
            path: 'media',
            component: MediaMockComponent
          },
          {
            path: 'panel',
            component: PanelMockComponent
          },
          {
            path: 'stack',
            component: StackMockComponent
          },
          {
            path: 'stage',
            component: StageMockComponent
          },
          {
            path: 'viewport',
            component: ViewportMockComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
