import { Component, OnInit, Directive } from '@angular/core';

@Directive({
  selector: '[appSearchHighlightTag]'
})

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}