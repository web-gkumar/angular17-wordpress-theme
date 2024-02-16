import { Routes } from '@angular/router';
import { Error404Component } from './include/error-404/error-404.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistationComponent } from './auth/registation/registation.component';

import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { HomeComponent } from './landing-page/home/home.component';

import { AdminComponent } from './admin/admin/admin.component';
import { DashbaordComponent } from './admin/dashbaord/dashbaord.component';
import { AllPostComponent } from './admin/post/all-post/all-post.component';


export const routes: Routes = [
    {path: '',redirectTo: 'auth', pathMatch:'full'},

    {path: '', component: AuthComponent, children: [
        {path: 'auth', component: LoginComponent, data: {title: 'Authentication'}},
        {path: 'signup', component: RegistationComponent, data: {title: 'Sign Up'}},

    ]},

    {path: '', component: LandingPageComponent, children: [
        {path: 'home', component: HomeComponent, data: {title: 'Home Page'}},
    ]},

    {path: '', component: AdminComponent, children: [
        {path: 'dashboard', component: DashbaordComponent, data: {title: 'Dashboard'}},
        {path: 'post', component: AllPostComponent, data: {title: 'All Posts'}}

    ]},

    {path: '**', component:Error404Component, data: { title: 'page Not Found Error 404'} }
];
