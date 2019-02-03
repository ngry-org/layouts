import {Component} from '@angular/core';

@Component({
  selector: 'app-stack-mock',
  templateUrl: './stack-mock.component.html',
  styleUrls: ['./stack-mock.component.css']
})
export class StackMockComponent {
  direction = 'column';

  public setDirection(direction: string) {
    this.direction = direction;
  }
}
