import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
   form: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
   console.log('email:', this.form.title);
   console.log('fname:', this.form.fname);
   console.log('lname:', this.form.lname);
   console.log('email:', this.form.email);
   console.log(this.form)
  }
}