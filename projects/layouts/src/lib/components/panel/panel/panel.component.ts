import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'l-panel',
  template: '<ng-content></ng-content>',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input()
  @HostBinding('attr.x')
  x: 'left' | 'center' | 'right' = 'center';

  @Input()
  @HostBinding('attr.y')
  y: 'top' | 'center' | 'bottom' = 'center';
}
