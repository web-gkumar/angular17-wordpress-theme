import {Component} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from "../../include/header/header.component";
import {FooterComponent} from '../../include/footer/footer.component';
import {SidenavComponent} from '../../include/sidenav/sidenav.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,MatButtonModule,HeaderComponent,FooterComponent,SidenavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

}
