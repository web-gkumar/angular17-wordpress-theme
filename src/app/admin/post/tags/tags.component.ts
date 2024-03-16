import { Component } from '@angular/core';
import {TitlebarComponent} from '../../../include/titlebar/titlebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CrudService} from '../../../shared/services/crud.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [TitlebarComponent,MatButtonModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  categoryForm!: FormGroup;
  allTagsData:any;
  collectionName = 'tags';

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
      this.allTagsData = data;
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
