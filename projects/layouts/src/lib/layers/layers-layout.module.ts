import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayersComponent} from './layers/layers.component';
import {LayerComponent} from './layer/layer.component';

@NgModule({
  declarations: [LayersComponent, LayerComponent],
  exports: [LayersComponent, LayerComponent],
  imports: [
    CommonModule
  ]
})
export class LayersLayoutModule {
}
