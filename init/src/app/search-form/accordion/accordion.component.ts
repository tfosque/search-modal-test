import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
    form: any = {};

    @Input() savedSearch: any;
    @Input() collapseAll: EventEmitter<boolean>;
    @Input() expandAll: EventEmitter<boolean>;

    @Input() filtering: boolean;
    @Input() searchText: string;

    @Output() delete = new EventEmitter();
    @Output() refresh = new EventEmitter();
    @Output() closeModal = new EventEmitter();

    inputName: string = null;
    inputDescription: string;
    inputNotifications: boolean;

    isCollapsed = true;
    // notifications: boolean;
    editing: boolean;   

  constructor() { }

  ngOnInit() {
    // console.log(this.savedSearch);
    
    this.editing = false;

    this.form.inputName = this.savedSearch.name; 
    this.form.inputNotifications = this.savedSearch.enable_notifications;
    this.form.inputDescription = this.savedSearch.description;

    /* this.inputName = this.savedSearch.name; 
    this.inputNotifications = this.savedSearch.enable_notifications;
    this.inputDescription = this.savedSearch.description; */

    // this.notifications = this.savedSearch.enable_notifications;

    this.expandAll.subscribe((collapsed: boolean) => {
        this.isCollapsed = collapsed;
    });    
  }

  submitForm(f: NgForm) {
    console.log('inputName:', this.form.inputName);
    console.log('inputNotifications:', this.form.inputNotifications);
    console.log('inputDescription:', this.form.inputDescription);
    console.log(this.form);
    console.log({f});
    console.log('valid::', this.form.inputName.invalid);
  }

   disableEditing() {
     // if inputName is empty (onCancel)
      this.form.inputName === '' ? this.form.inputName = this.savedSearch.name : null;
      this.editing = false;
    }

    toggleEditing() {
        this.editing = !this.editing;
    }

}