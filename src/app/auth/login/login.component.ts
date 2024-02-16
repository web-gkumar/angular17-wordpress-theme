import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { NotificationsService } from '../../shared/services/notifications.service';
import { FormGroup } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,MatIconModule,MatInputModule,MatButtonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  hide = true;
  authForm!:FormGroup;
  title = "Login Panel";
  constructor(
    private router: Router,
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private notifyServices: NotificationsService
    ) {}

  ngOnInit(): void {
    
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get f() { return this.authForm.controls; }

  signUp() {
    this.title = "Registation Panel";
  }

  signIn() {
    this.title = "Login Panel";
    this.authService.login(this.authForm.value.email,this.authForm.value.password ).subscribe( data => {
      if(data.Status == "success") {
        localStorage.setItem('token', JSON.stringify({ token: data.token }));
        this.notifyServices.notifymsg('Login Successfull', 'close');
        this.router.navigate(['/dashboard']);
      }else {
        this.notifyServices.notifymsg('bg-danger','Invalid Email or Password')
      }
    })
  }

}
