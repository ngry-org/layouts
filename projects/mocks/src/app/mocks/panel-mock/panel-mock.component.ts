import {Component} from '@angular/core';

@Component({
  selector: 'app-panel-mock',
  templateUrl: './panel-mock.component.html',
  styleUrls: ['./panel-mock.component.css']
})
export class PanelMockComponent {

  x = 'center';
  y = 'center';

  public setX(x: string) {
    this.x = x;
  }

  public setY(y: string) {
    this.y = y;
  }
}
