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
} from '@ngry/layouts';

import {AppComponent} from './app.component';
import {BlockComponent} from './components/block/block.component';
import {MediaMockComponent} from './mocks/media-mock/media-mock.component';
import {LayoutsZoneComponent} from './zones/layouts-zone/layouts-zone.component';
import {TextLineComponent} from './components/text-line/text-line.component';
import {PanelMockComponent} from './mocks/panel-mock/panel-mock.component';
import {ViewportMockComponent} from './mocks/viewport-mock/viewport-mock.component';
import {StageMockComponent} from './mocks/stage-mock/stage-mock.component';
import {StackMockComponent} from './mocks/stack-mock/stack-mock.component';
import {LayersMockComponent} from './mocks/layers-mock/layers-mock.component';
import {AboutZoneComponent} from './zones/about-zone/about-zone.component';
import {ServicesModule} from './services/services.module';
import {RouteTitleService} from './services/route-title/route-title.service';

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
    LayersMockComponent,
    AboutZoneComponent
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
            redirectTo: 'layers'
          },
          {
            path: 'layers',
            component: LayersMockComponent,
            data: {
              title: 'Layers layout'
            }
          },
          {
            path: 'media',
            component: MediaMockComponent,
            data: {
              title: 'Media layout'
            }
          },
          {
            path: 'panel',
            component: PanelMockComponent,
            data: {
              title: 'Panel layout'
            }
          },
          {
            path: 'stack',
            component: StackMockComponent,
            data: {
              title: 'Stack layout'
            }
          },
          {
            path: 'stage',
            component: StageMockComponent,
            data: {
              title: 'Stage layout'
            }
          },
          {
            path: 'viewport',
            component: ViewportMockComponent,
            data: {
              title: 'Viewport layout'
            }
          }
        ]
      },
      {
        path: 'about',
        component: AboutZoneComponent,
        data: {
          title: 'About'
        }
      }
    ], {
      useHash: true
    })
  ],
  providers: [RouteTitleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
