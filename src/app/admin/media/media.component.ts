import { Component } from '@angular/core';
import {TitlebarComponent} from '../../include/titlebar/titlebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [TitlebarComponent,MatButtonModule,MatIconModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {

}
