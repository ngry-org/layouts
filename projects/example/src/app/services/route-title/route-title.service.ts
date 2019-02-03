import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Data, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteTitleService {
  private _defaultTitle: string;

  public get defaultTitle(): string {
    return this._defaultTitle;
  }

  public set defaultTitle(value: string) {
    this._defaultTitle = value;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this._defaultTitle = titleService.getTitle();

    this.router.events.pipe(
      filter((event) => {
        return event instanceof NavigationEnd;
      }),
      map(() => activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),
      map((data: Data) => {
        return data.title;
      })
    ).subscribe((title: string) => {
      titleService.setTitle(title || this.defaultTitle);
    });
  }

}
