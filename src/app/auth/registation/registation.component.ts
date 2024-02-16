import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-registation',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,MatIconModule,MatInputModule,MatButtonModule,MatCheckboxModule],
  templateUrl: './registation.component.html',
  styleUrl: './registation.component.scss'
})
export class RegistationComponent {
  title = "LOGIN PANEL";
  isloginpage = false;


  registation!: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private authService:AuthService, private snackBar:MatSnackBar ) {}

  ngOnInit(): void {
    this.registation = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      conform_password: ['', Validators.required],
      tc: ['', Validators.required],
    })
  }

  get f() { return this.registation.controls; }


  signUp(){
    this.authService.register(this.registation.value.name,this.registation.value.email, this.registation.value.password, this.registation.value.conform_password,this.registation.value.tc,  ).subscribe( data => {
      if(data){
        this.snackBar.open(data.Message, "", {
          duration: 90000,
          verticalPosition: "top", // Allowed values are  'top' | 'bottom'
          horizontalPosition: "right", // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
          panelClass: ["bg-danger"]
        });
      }
    })
  }


}
