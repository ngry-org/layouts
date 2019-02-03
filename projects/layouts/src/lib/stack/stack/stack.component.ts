import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'l-stack',
  template: '<ng-content></ng-content>',
  styleUrls: ['./stack.component.css']
})
export class StackComponent {
  @Input()
  direction: 'column' | 'row' = 'column';

  @HostBinding('class.row')
  get isRow(): boolean {
    return this.direction === 'row';
  }

  @HostBinding('class.column')
  get isColumn(): boolean {
    return this.direction === 'column';
  }
}
