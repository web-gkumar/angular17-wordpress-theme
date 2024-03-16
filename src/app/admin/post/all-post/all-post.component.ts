import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TitlebarComponent} from '../../../include/titlebar/titlebar.component';
import {CrudService} from '../../../shared/services/crud.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {EditorModule} from '@tinymce/tinymce-angular';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-all-post',
  standalone: true,
  imports: [TitlebarComponent,MatIconModule,MatButtonModule,MatButtonToggleModule,FormsModule,ReactiveFormsModule,MatSidenavModule,EditorModule,MatExpansionModule,MatCheckboxModule],
  templateUrl: './all-post.component.html',
  styleUrl: './all-post.component.scss'
})
export class AllPostComponent implements OnInit {
createForm!:FormGroup;
collectionName = "post";
isCreatePost = true;
allCategory:any;
allTabs:any;
tinymceConfig = {
  height: 500,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
   toolbar: 'styles fontsizeinput | bold italic underline strikethrough | fontselect fontsizeselect formatselect | align bullist numlist | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | table link image media pageembed | spellcheckdialog a11ycheck code | inserttemplate',

   // toolbar: 'styles fontsizeinput | aidialog aishortcuts | table link image media pageembed | spellcheckdialog a11ycheck code | inserttemplate',


}
constructor( private formBuilder: FormBuilder, private crudService:CrudService){
  this.crudService.getAll('category').subscribe(data => {
    this.allCategory = data;
  })
  this.crudService.getAll('tags').subscribe(data => {
    this.allTabs = data;
  })
}


ngOnInit(): void {
  this.createForm = this.formBuilder.group({
     title: [""],
     description: [""]
  })
}

showForm() {
  this.isCreatePost = !this.isCreatePost;
}


setAll(data:any,event:any) {
  if(event.checked) {
    data['checked'] = event.checked;
    this.createForm.value.push(data)
  }
 console.log(data)
}


publishForm() {
  let formValue = this.createForm.value;
  this.crudService.createPost(formValue, this.collectionName).subscribe(res => {
    console.log(res);
  });
  this.createForm.reset();
}




}
