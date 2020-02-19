import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CrudStorageService } from '../../services/crud-storage.service';
// import UnsplashSearch from 'unsplash-search';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import * as _ from "lodash";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
  animations: [
    trigger('changeState', [
      state('state1', style({
        background: 'green',
        transform: 'scale(1)'
      })),
      state('state2', style({
        background: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('200ms'))
    ])
  ]
})
export class AccordionComponent implements OnInit, OnDestroy {
  form: any = {};

  toState = 'state1';
  // @Input() currentState;

  @Input() savedSearch: any;
  @Input() collapseAll: EventEmitter<boolean>;
  @Input() expandAll: EventEmitter<boolean>;

  @Input() filtering: boolean;
  @Input() searchText: string;

  @Output() refreshEvent = new EventEmitter();
  @Output() submitCheckboxEvent = new EventEmitter();
  @Output() localRefresh = new EventEmitter();

  @Output() refresh = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  inputName: string = null;
  inputDescription: string;
  inputNotifications: boolean;

  isCollapsed = true;
  isDetailsCollapsed = true;
  editing: boolean;
  showDetails = false;

  public overlayColors: any = {};

  constructor(private api: CrudStorageService) { }

  /* showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  } */

  // NEW:
  ngOnInit() {
    this.editing = false;

    this.form.inputName = this.savedSearch.name;
    this.form.inputNotifications = this.savedSearch.enable_notifications;
    this.form.inputDescription = this.savedSearch.description;

    this.handleDefaultCollapse();

    // handle isCollapse on default
    let collapseStatusList = JSON.parse(localStorage.getItem('localCollapseStatus'));
    collapseStatusList.map(item =>
      item === this.savedSearch.id ? this.isCollapsed = false : null
      )

    // LEARN:
    this.collapseAll.subscribe((collapsed: boolean) => {
      this.isCollapsed = collapsed;
      this.disableEditing();
  });
    this.expandAll.subscribe((collapsed: boolean) => {
      this.isCollapsed = collapsed;
    });

    this.overlayIcons();

    /* const accessKey = 'aDIlBSw4dCjHIsRaAzzj013iFdG5jbipzmcLMU_WAzY';
    const provider = new UnsplashSearch(accessKey); */

    /* provider.searchAll(this.savedSearch.name, 1)
      .then(data => {
        console.log('Total images in result:', data.totalImages);
        console.log('Total pages', data.totalPages);
        console.log({data})

        data.images.forEach(image => {
          console.log(
            `Taken by ${image.author.name} and download on ${image.urls.full}`
          );
        });
      })
      .catch(error => error); */


  }

  changeState(state: any) {
    this.toState = state;
  }

  // NEW:
  handleDefaultCollapse() {
    this.isCollapsed === true ? this.isCollapsed = true : this.isCollapsed = false;
    this.clearLocalCollapseStatus();
  }

  clearLocalCollapseStatus() {
    setTimeout(() => {
      localStorage.setItem('localCollapseStatus', JSON.stringify([]));
    }, 800);
  }

  // NEW:
  delete() {
    this.api.deleteLocalData(this.savedSearch.id);

    setTimeout(() => {
      // const newEntry = { id: this.savedSearch.id, ...this.form };
      this.refreshEvent.emit();
    }, 150);
  }

  // NEW:
  saveChanges(notification) {
    // this.disableEditing();
    const query = {
      name: this.form.inputName,
      enable_notifications: this.form.inputNotifications,
      description: this.form.inputDescription
    };+
    // TODO: change name submitEvent
    this.submitCheckboxEvent.emit({ ...this.savedSearch, ...query });
    this.handleDefaultCollapse();
  }

  disableEditing() {
    // NEW:
    // if inputName is empty (onCancel) reset inputName to previous text
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
    // console.log({ overlays });
  }

  // MAP: overlays
  loadOverlays(event) {
    // TODO: leaflet or mapBox
    // event.defaultPrevented();
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  /* localRefreshEvent() {
    this.localRefresh.emit();
  } */

  ngOnDestroy() {
    // detect collapsed state
    let a = JSON.parse(localStorage.getItem('localCollapseStatus'));
    a.push(this.savedSearch.id)
    !this.isCollapsed ? localStorage.setItem('localCollapseStatus', JSON.stringify(a)) : null;
  }
}
