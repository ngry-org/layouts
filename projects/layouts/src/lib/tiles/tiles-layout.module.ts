import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TilesComponent} from './tiles/tiles.component';
import {TileComponent} from './tile/tile.component';

@NgModule({
  declarations: [TilesComponent, TileComponent],
  exports: [TilesComponent, TileComponent],
  imports: [
    CommonModule
  ]
})
export class TilesLayoutModule {
}
