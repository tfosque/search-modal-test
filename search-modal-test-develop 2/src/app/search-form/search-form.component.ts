import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  @Input() savedSearches: any[];
  @Input() savedSearchCount: number;
  @Input() searchText: string = null;

  public name: string;
  public isCollapsed = new EventEmitter();
  isExpand: boolean;

  public expandAll = new EventEmitter();
  public collapseAll = new EventEmitter();

  @Output("refreshAll") refreshEvent = new EventEmitter();
  @Output() localRefresh = new EventEmitter();
  @Output("updateCheckbox") submitFromCheckbox = new EventEmitter();

  constructor(){ }

  ngOnInit() {
    // this.savedSearchCount = 0;
    // console.log(this.savedSearches)
  }

  closeModal() {
    // this.modalRef.hide();
  }

  saveChanges() {
    console.log("saveChanges");
    // this.submitCheckboxEvent.emit();
  }


  deleteItem(id: number) {

  }

  clearSearchText() {
    this.searchText = null;
  }

  collapse() {
    this.collapseAll.emit(true);
    this.isExpand = false;
  }

  expand() {
    this.expandAll.emit(false);
    this.isExpand = true;
  }

  submitFromCheckboxComponent(event) {
    // console.log("search-form:.....");
    this.submitFromCheckbox.emit(event);
  }

  localRefreshEvent() {
    this.localRefresh.emit();
  }

  refreshFromComponent(event) {
    console.log({ event });
    this.refreshEvent.emit();
  }

  // duplicate clearSearchText()
  refresh() {
    this.searchText = null;
  }
}
