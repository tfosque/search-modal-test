import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
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
  editing: boolean;

  constructor() {}

  ngOnInit() {
    this.editing = false;

    this.form.inputName = this.savedSearch.name;
    this.form.inputNotifications = this.savedSearch.enable_notifications;
    this.form.inputDescription = this.savedSearch.description;

    this.expandAll.subscribe((collapsed: boolean) => {
      this.isCollapsed = collapsed;
    });
  }

  // NEW:
  submitForm(f: NgForm) {
    console.log("inputName:", this.form.inputName);
    console.log("inputNotifications:", this.form.inputNotifications);
    console.log("inputDescription:", this.form.inputDescription);
    console.log(this.form);
    console.log({ f });
    console.log("valid::", this.form.inputName.invalid);
  }

  // NEW:
  disableEditing() {
    // if inputName is empty (onCancel)
    this.resetOnDisable();
    this.editing = false;
  }

  // NEW:
  resetOnDisable() {
    console.log(this.form.inputDescription);
    if (this.form.inputName === "") {
      this.form.inputName = this.savedSearch.name;
    }
    if (this.form.inputDescription === "") {
      this.form.inputDescription = this.savedSearch.description;
    }
  }

  expand() {
    // this.expandAll.emit(true);
  }

  collapse() {
    // this.collapseAll.emit(true);
  }

  toggleEditing() {
    this.editing = !this.editing;
  }
}
