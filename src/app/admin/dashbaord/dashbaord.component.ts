import { Component } from '@angular/core';
import {TitlebarComponent} from '../../include/titlebar/titlebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dashbaord',
  standalone: true,
  imports: [TitlebarComponent,MatButtonModule,MatIconModule],
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.scss'
})
export class DashbaordComponent {

}
