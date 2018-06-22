import { Component, OnInit, NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(".btn-toggle").click(function() {
      var wrapper = $('.wrapper');
      wrapper.toggleClass("closed")
    })
  }
  title = 'app';
}