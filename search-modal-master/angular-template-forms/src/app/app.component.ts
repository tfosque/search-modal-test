import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  savedSearches: any[];
  savedSearchCount: number;
  searchText: string;

  constructor(public mockaroo: DataService) {}

  ngOnInit() {
    const data = this.mockaroo.getSavedSearches().subscribe(response => {
      // console.log({ response });
      this.savedSearches = response;
      this.savedSearchCount = response.length;
    });
  }

  deleteItem(id: number) {}

  clearSearchText() {
    this.searchText = null;
  }

  collapse() {
    /* this.collapseAll.emit(true);
        this.isExpand = false; */
  }

  expand() {
    /* this.expandAll.emit(false);
        this.isExpand = true; */
  }

  refresh() {
    /* this.searchText = null;
        setTimeout(() => {
            this.getSearches();
        }, 500); */
  }
}
