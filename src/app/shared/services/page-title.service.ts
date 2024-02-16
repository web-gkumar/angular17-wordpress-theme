import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor(private activatedRoute: ActivatedRoute) {}

  

  getRouteData(route: ActivatedRoute):any {
    while (route.firstChild) {
      route = route.firstChild;
    }
    const title = route.snapshot.data ? route.snapshot.data['title'] : 'Default Title';
    this.setPageTitle(title);
  }

  setPageTitle(title: string): void {
    document.title = title;
  }

}
