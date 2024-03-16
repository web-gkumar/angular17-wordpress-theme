import { Component } from '@angular/core';
import {TitlebarComponent} from '../../include/titlebar/titlebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TitlebarComponent,MatButtonModule,MatIconModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
