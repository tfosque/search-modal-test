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
import { FilterByPipe } from "./pipes/filter-by.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    AccordionComponent,
    DetailsSummaryComponent,
    SortByFilterPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
