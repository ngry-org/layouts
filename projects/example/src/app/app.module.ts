import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {LayoutsModule} from '@ngry/layouts';

import {ServicesModule} from './services/services.module';
import {ComponentsModule} from './components/components.module';
import {BlocksModule} from './blocks/blocks.module';
import {MocksModule} from './mocks/mocks.module';
import {ZonesModule} from './zones/zones.module';

import {MediaMock1Component} from './mocks/media-mock-1/media-mock-1.component';
import {PanelMock1Component} from './mocks/panel-mock-1/panel-mock-1.component';
import {ViewportMock1Component} from './mocks/viewport-mock-1/viewport-mock-1.component';
import {StageMock1Component} from './mocks/stage-mock-1/stage-mock-1.component';
import {StackMock1Component} from './mocks/stack-mock-1/stack-mock-1.component';
import {LayersMock1Component} from './mocks/layers-mock-1/layers-mock-1.component';
import {TilesMock1Component} from './mocks/tiles-mock-1/tiles-mock-1.component';
import {LayoutsZoneComponent} from './zones/layouts-zone/layouts-zone.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutsModule,
    ComponentsModule,
    BlocksModule,
    MocksModule,
    ZonesModule,
    ServicesModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'layouts'
      },
      {
        path: 'layouts',
        component: LayoutsZoneComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'layers/1'
          },
          {
            path: 'layers',
            pathMatch: 'full',
            redirectTo: 'layers/1'
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
    ], {
      useHash: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
