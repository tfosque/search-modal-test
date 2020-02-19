import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { TooltipModule } from "ngx-bootstrap";
import { CollapseModule } from "ngx-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataService } from "./services/data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { AccordionComponent } from "./search-form/accordion/accordion.component";
import { DetailsSummaryComponent } from "./search-form/details-summary/details-summary.component";

import { SortByFilterPipe } from "./pipes/sort-by-filter.pipe";
import { SavedSearchFilterPipe } from './pipes/saved-search-filter.pipe';
import { FilterByPipe } from "./pipes/filter-by.pipe";
import { HighlightPipe } from './pipes/highlight.pipe';

import { AlertService } from './services/alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    AccordionComponent,
    DetailsSummaryComponent,
    SortByFilterPipe,
    SavedSearchFilterPipe,
    FilterByPipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [DataService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
