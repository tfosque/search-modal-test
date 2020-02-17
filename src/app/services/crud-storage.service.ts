import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as _ from "lodash";
import { DataService } from "../services/data.service";

@Injectable({
  providedIn: "root"
})
export class CrudStorageService {
  public localdb = localStorage.getItem("savedSearches");

  private api =
    "https://my.api.mockaroo.com/SavedSearches_mars.json?key=c1a35bd0";

  constructor(public mockaroo: DataService, private http: HttpClient) {}

  // api call
  getApiData(): Observable<any[]> {
    // let data: any[];
    return this.http.get<any[]>(this.api);
  }

  // Local Storage
  getLocalStorage() {
    // return this.http.get<any[]>(this.api);
    return JSON.parse(localStorage.getItem("savedSearches"));
  }

  udpdateLocalStorage(newData: any) {
    // console.log({ newData });
    localStorage.setItem("savedSearches", JSON.stringify(newData));
    this.getLocalStorage();
  }

  deleteLocalData(id: number) {
    // find id then perform delete
    let newData = [];
    let db = JSON.parse(this.localdb);

    // console.log({ newData });

    db.map(item => {
      if (item.id !== id) {
        // console.log({ item });
        newData.push(item);
      }
    });

    this.udpdateLocalStorage(newData);
  }
}
