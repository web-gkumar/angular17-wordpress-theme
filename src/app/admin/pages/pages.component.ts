import { Component } from '@angular/core';
import {TitlebarComponent} from '../../include/titlebar/titlebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [TitlebarComponent,MatButtonModule,MatIconModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
