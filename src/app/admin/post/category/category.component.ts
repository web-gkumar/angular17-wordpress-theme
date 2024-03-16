import { Component, OnInit } from '@angular/core';
import {TitlebarComponent} from '../../../include/titlebar/titlebar.component';
import {CrudService} from '../../../shared/services/crud.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TitlebarComponent,MatButtonModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  categoryForm!: FormGroup;
  allCategoryData:any;
  collectionName = 'category';

  constructor( private formBuilder: FormBuilder, private crudService: CrudService) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      'category': [''],
      'slug': [''],
      'description': [''],
    });
    this.getModule();
  }

  getModule(){
    this.crudService.getAll(this.collectionName).subscribe(data => {
      this.allCategoryData = data;
    })
  }

  submit(){
    let formValue = this.categoryForm.value;
    this.crudService.createPost(formValue, this.collectionName).subscribe(res => {
      console.log(res);
    });
    this.categoryForm.reset();
  }

}

