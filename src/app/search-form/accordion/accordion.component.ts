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

  public overlayColors: any = {};

  constructor() {}

  ngOnInit() {
    this.editing = false;

    this.form.inputName = this.savedSearch.name;
    this.form.inputNotifications = this.savedSearch.enable_notifications;
    this.form.inputDescription = this.savedSearch.description;

    this.expandAll.subscribe((collapsed: boolean) => {
      this.isCollapsed = collapsed;
    });

    this.overlayIcons();
  }

  // NEW:
  submitForm(f: NgForm) {
    /* console.log("inputName:", this.form.inputName);
    console.log("inputNotifications:", this.form.inputNotifications);
    console.log("inputDescription:", this.form.inputDescription);
    console.log(this.form);
    console.log({ f });
    console.log("valid::", this.form.inputName.invalid); */
  }

  // NEW:
  disableEditing() {
    // if inputName is empty (onCancel)
    this.resetOnDisable();
    this.editing = false;
  }

  // NEW:
  resetOnDisable() {
    if (this.form.inputName === "") {
      this.form.inputName = this.savedSearch.name;
    }
    if (this.form.inputDescription === "") {
      this.form.inputDescription = this.savedSearch.description;
    }
  }

  // NEW:
  overlayIcons() {
    // grab overlays from api_queries.card-img-overlay
    // [foundri, midb, media]
    function getColors(input: string) {
      let color: string;

      if (input === "foundri") {
        color = "#F55151";
      }
      if (input === "midb") {
        color = "#28C643";
      }
      if (input === "media") {
        color = "#776BA3";
      }

      return color;
    }

    const overlays =
      this.savedSearch && this.savedSearch.api_queries
        ? this.savedSearch.api_queries.map(m => {
            return { color: getColors(m.overlay) };
          })
        : null;
    this.overlayColors = overlays;
    console.log({ overlays });
  }

  loadOverlays(event) {
    // event.defaultPrevented();
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
