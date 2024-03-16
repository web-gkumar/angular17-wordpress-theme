import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PageTitleService } from './shared/services/page-title.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17';
  currentpageTitle:any = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageTitle:PageTitleService) {
    // this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
    //   const routeData = this.pageTitle.getRouteData(this.activatedRoute);
    //   const title = routeData ? routeData.title : 'Default Title';
    //   //this.currentpageTitle = routeData.parrentpage;
    //   this.pageTitle.setPageTitle(title);
    // });
  }


  //isLogined:boolean = true;
}
