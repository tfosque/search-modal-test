import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SearchHighlightTagDirective } from './directives/search-highlight-tag.directive';
import { NavComponent } from './nav/nav.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { TestFormComponent } from './test-form/test-form.component';
import { AccordionComponent } from './search-form/accordion/accordion.component';
import { DataService } from './services/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, TooltipModule.forRoot(), CollapseModule.forRoot() ],
  declarations: [ AppComponent, AccordionComponent, SearchHighlightTagDirective, NavComponent, SearchFormComponent, TestFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
