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
  TilesLayoutModule,
  ViewportLayoutModule
} from '@ngry/layouts';

import {ServicesModule} from './services/services.module';
import {ComponentsModule} from './components/components.module';
import {BlocksModule} from './blocks/blocks.module';
import {MocksModule} from './mocks/mocks.module';
import {ZonesModule} from './zones/zones.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StageLayoutModule,
    ViewportLayoutModule,
    TilesLayoutModule,
    StackLayoutModule,
    PanelLayoutModule,
    MediaLayoutModule,
    LayersLayoutModule,
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
      }
    ], {
      useHash: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
