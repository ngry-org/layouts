import {Component} from '@angular/core';

@Component({
  selector: 'app-stack-mock',
  templateUrl: './stack-mock-1.component.html',
  styleUrls: ['./stack-mock-1.component.css']
})
export class StackMock1Component {
  direction = 'column';

  public setDirection(direction: string) {
    this.direction = direction;
  }
}
