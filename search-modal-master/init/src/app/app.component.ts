import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {  
  savedSearches: any[];
  savedSearchCount: number;
  searchText: string;

  constructor (
    public  data: DataService,
  ){}

  ngOnInit() {
    const data = this.data.getSavedSearches();
    this.savedSearches = data;
    this.savedSearchCount = data.length;

    // console.log({data}, data.length);
  }


    deleteItem(id: number) {        
    }

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
