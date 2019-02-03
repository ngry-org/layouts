import {Component} from '@angular/core';
import {RouteTitleService} from './services/route-title/route-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(
    private routeTitleService: RouteTitleService
  ) {
  }
}
