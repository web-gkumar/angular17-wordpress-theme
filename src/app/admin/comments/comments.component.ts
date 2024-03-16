import { Component } from '@angular/core';
import {TitlebarComponent} from '../../include/titlebar/titlebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [TitlebarComponent,MatButtonModule,MatIconModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

}
