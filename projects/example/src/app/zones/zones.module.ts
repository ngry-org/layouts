import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MediaLayoutModule, StackLayoutModule, ViewportLayoutModule} from '@ngry/layouts';

import {BlocksModule} from '../blocks/blocks.module';
import {ComponentsModule} from '../components/components.module';
import {MocksModule} from '../mocks/mocks.module';
import {ServicesModule} from '../services/services.module';

import {LayoutsZoneComponent} from './layouts-zone/layouts-zone.component';

import {LayersMock1Component} from '../mocks/layers-mock-1/layers-mock-1.component';
import {MediaMock1Component} from '../mocks/media-mock-1/media-mock-1.component';
import {PanelMock1Component} from '../mocks/panel-mock-1/panel-mock-1.component';
import {StackMock1Component} from '../mocks/stack-mock-1/stack-mock-1.component';
import {StageMock1Component} from '../mocks/stage-mock-1/stage-mock-1.component';
import {TilesMock1Component} from '../mocks/tiles-mock-1/tiles-mock-1.component';
import {ViewportMock1Component} from '../mocks/viewport-mock-1/viewport-mock-1.component';

@NgModule({
  declarations: [
    LayoutsZoneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MediaLayoutModule,
    StackLayoutModule,
    ViewportLayoutModule,
    BlocksModule,
    ComponentsModule,
    MocksModule,
    ServicesModule,
    RouterModule.forChild([
      {
        path: 'layouts',
        component: LayoutsZoneComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'frames/1'
          },
          {
            path: 'layers/1',
            component: LayersMock1Component,
            data: {
              title: 'Layers layout'
            }
          },
          {
            path: 'media',
            component: MediaMock1Component,
            data: {
              title: 'Media layout'
            }
          },
          {
            path: 'panel',
            component: PanelMock1Component,
            data: {
              title: 'Panel layout'
            }
          },
          {
            path: 'stack',
            component: StackMock1Component,
            data: {
              title: 'Stack layout'
            }
          },
          {
            path: 'stage',
            component: StageMock1Component,
            data: {
              title: 'Stage layout'
            }
          },
          {
            path: 'tiles',
            component: TilesMock1Component,
            data: {
              title: 'Tiles layout'
            }
          },
          {
            path: 'viewport',
            component: ViewportMock1Component,
            data: {
              title: 'Viewport layout'
            }
          }
        ]
      }
    ])
  ]
})
export class ZonesModule {
}
