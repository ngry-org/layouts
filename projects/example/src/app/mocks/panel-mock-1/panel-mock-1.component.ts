import {Component} from '@angular/core';

@Component({
  selector: 'app-panel-mock',
  templateUrl: './panel-mock-1.component.html',
  styleUrls: ['./panel-mock-1.component.css']
})
export class PanelMock1Component {

  x = 'center';
  y = 'center';

  public setX(x: string) {
    this.x = x;
  }

  public setY(y: string) {
    this.y = y;
  }
}
