import { Component, OnInit } from "@angular/core";
import { CrudStorageService } from "./services/crud-storage.service";
import * as _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  savedSearches: any[];
  savedSearchCount: number;
  searchText: string;

  constructor(private api: CrudStorageService) {}

  ngOnInit() {
    this.getLocalData();
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log({ changes });
  } */

  // TEMP:
  getLocalData() {
    const db = JSON.parse(localStorage.getItem("savedSearches"));
    // console.log(db);

    // console.log({ db });
    _.isEmpty(db)
      ? this.api.getApiData().subscribe(res => console.log({ res }))
      : ((this.savedSearches = db), (this.savedSearchCount = db.length));
  }

  clearSearchText() {
    this.searchText = null;
  }

  // FIX:
  collapse() {
    console.log("colapseAll......");
    /* this.collapseAll.emit(true);
        this.isExpand = false; */
  }
  // FIX:
  expand() {
    console.log("expandAll......");
    /* this.expandAll.emit(false);
        this.isExpand = true; */
  }

  // NEW:
  updateCheckbox(event) {
    // item id,  // map over and replace
    // let newData = [];
    let newData = this.savedSearches;
    const id = event.id;

    newData.map(item => {
      if (item.id === id) {
        // console.log({ item });
        // console.log({ event });
        return (
          (item.name = event.name),
          (item.enable_notifications = event.enable_notifications),
          (item.description = event.description)
        );
      }

      this.api.udpdateLocalStorage(newData);
      this.savedSearches = newData;
      // console.log({ newData });
      return;
    });
  }

  // NEW:
  refreshEventC() {
    setTimeout(() => {
      const newData = this.api.getLocalStorage();
      this.savedSearches = newData;
      this.savedSearchCount = newData.length;
    }, 150);
  }
}
