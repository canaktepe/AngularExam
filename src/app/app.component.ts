import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ActivatedRoute,
  Router
} from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  header: string;
  sideBarState: boolean;

  constructor(private loadingBar: SlimLoadingBarService,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService) {

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }

  AddLocalStorage(state) {

    this.localStorageService.add("side-bar", state);
    this.sideBarState = state;
  }

  ngOnInit(): void {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title'])
        this.header = event['title'];
      });


    $(".btn-toggle").click(function (e) {

        // AddLocalStorage(this.sideBarstate);
      
      var wrapper = $('.wrapper');
      wrapper.toggleClass("closed")
      e.stopPropagation();
    })
  }
  title = 'app';
}