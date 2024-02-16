import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatRippleModule,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  color = "#4141414d"

  menu = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      color: '#ff7f0e',
    },
    {
      title: 'Post',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [

        {
          title: 'All Post',
          icon: 'money',
          link: '/post',
          color: '#ff7f0e',
        },
        {
          title: 'Categories',
          icon: 'people',
          color: '#ff7f0e',
          link: 'categories',
        },
        {
          title: 'Tags',
          icon: 'people',
          color: '#ff7f0e',
          link: 'tags',
        },
      ],
    },
    {
      title: 'Media',
      icon: 'collections_bookmark',
      color: '#ff7f0e',
      subMenu: [

        {
          title: 'Library',
          icon: 'money',
          link: 'library',
          color: '#ff7f0e',
        },
        {
          title: 'Add New Media',
          icon: 'people',
          color: '#ff7f0e',
          link: 'library',
        }
      ],
    },
    {
      title: 'Pages',
      icon: 'layers',
      color: '#ff7f0e',
      subMenu: [

        {
          title: 'All Pages',
          icon: 'money',
          link: 'pages',
          color: '#ff7f0e',
        },
        {
          title: 'Add New Page',
          icon: 'people',
          color: '#ff7f0e',
          link: 'pages',
        }
      ],
    },
    {
      title: 'Comments',
      icon: 'forum',
      link: 'comments',
      color: '#ff7f0e',
    },
    {
      title: 'Settings',
      icon: 'settings',
      link: 'settings',
      color: '#ff7f0e',
    },


  ];

}
