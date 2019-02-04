import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LayoutsModule} from '@ngry/layouts';

import {LayoutsZoneComponent} from './layouts-zone/layouts-zone.component';
import {BlocksModule} from '../blocks/blocks.module';
import {ComponentsModule} from '../components/components.module';
import {MocksModule} from '../mocks/mocks.module';
import {ServicesModule} from '../services/services.module';

@NgModule({
  declarations: [
    LayoutsZoneComponent
  ],
  exports: [
    LayoutsZoneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    BlocksModule,
    ComponentsModule,
    MocksModule,
    ServicesModule
  ]
})
export class ZonesModule {
}
