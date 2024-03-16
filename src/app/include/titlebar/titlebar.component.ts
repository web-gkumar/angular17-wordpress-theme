import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.scss'
})
export class TitlebarComponent {
  @Input() icon?: string;
}
