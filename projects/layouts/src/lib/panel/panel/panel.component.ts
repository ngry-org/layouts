import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'l-panel',
  template: '<ng-content></ng-content>',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input()
  x: 'left' | 'center' | 'right' = 'center';

  @Input()
  y: 'top' | 'center' | 'bottom' = 'center';

  @HostBinding('class.x-left')
  get xLeft(): boolean {
    return this.x === 'left';
  }

  @HostBinding('class.x-center')
  get xCenter(): boolean {
    return this.x === 'center';
  }

  @HostBinding('class.x-right')
  get xRight(): boolean {
    return this.x === 'right';
  }

  @HostBinding('class.y-top')
  get yTop(): boolean {
    return this.y === 'top';
  }

  @HostBinding('class.y-center')
  get yCenter(): boolean {
    return this.y === 'center';
  }

  @HostBinding('class.y-bottom')
  get yBottom(): boolean {
    return this.y === 'bottom';
  }
}
