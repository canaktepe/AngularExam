import { Component, OnInit } from '@angular/core';
// import {NgSpinningPreloader} from 'ng2-spinning-preloader';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // constructor(private ngSpinningPreloader: NgSpinningPreloader) {}

  ngOnInit(): void {
    // this.ngSpinningPreloader.stop();

    $(".btn-toggle").click(function() {
      var wrapper = $('.wrapper');
      wrapper.toggleClass("closed")
    })
  }
  title = 'app';
}