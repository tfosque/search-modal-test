import { Component, OnInit, AfterViewInit, EventEmitter, Input } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpErrorResponse } from '@angular/common/http';
// import { FoundriService } from '../../services/waterbear.service';
// import { SavedSearch } from 'src/app/models/SavedSearch';
@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, AfterViewInit {
    @Input() savedSearches: any[];
    @Input() savedSearchCount: number;
    @Input() searchText: string = null; 

    public name: string;
    isExpand: boolean;

    public isCollapsed = new EventEmitter();
    public expandAll = new EventEmitter();
    public collapseAll = new EventEmitter();

    constructor(
    /*     public modalRef: BsModalRef,
        public modalService: BsModalService, */
        // private messageService: MessageService,
        // private waterbearService: FoundriService
    ) {}

    ngOnInit() {
        // this.savedSearchCount = 0;
        // console.log(this.savedSearches)
    }

    closeModal() {
        // this.modalRef.hide();
    }

    ngAfterViewInit() {
        // this.getSearches();
    }

    /* getSearches() {
        this.waterbearService.getSavedSearches().subscribe(
            savedSearches => {
                console.log({savedSearches});

                this.saveSearches = savedSearches;
                this.savedSearchCount = this.saveSearches && this.saveSearches.length ? this.saveSearches.length : null;
            },
            (error: HttpErrorResponse) => {
                // this.messageService.bad(`Error retrieving saved searches: ${error.status}`);
            }
        );
    } */

    deleteItem(id: number) {
        /* this.waterbearService.deleteSavedSearch(id).subscribe(
            savedSearches => {
                this.savedSearchCount = savedSearches && savedSearches.length ? savedSearches.length : null;
            },
            (error: HttpErrorResponse) => {
                // this.messageService.bad(`Error retrieving saved searches: ${error.status}`);
            }
        ); */
        // this.refresh();
        // this.messageService.good(`Your Saved Search was successfully deleted.`);
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

    refresh() {
        this.searchText = null;
        /* setTimeout(() => {
            this.getSearches();
        }, 500); */
    }
}
