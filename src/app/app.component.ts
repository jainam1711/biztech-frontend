// Libraries
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  routeOptions: any;
  private subcriptionRouter: Subscription;

  constructor(
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subcriptionRouter = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.runOnRouteChange();
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(_ => this.runOnRouteChange());
  }

  ngOnDestroy(): void {
    this.subcriptionRouter.unsubscribe();
  }

  runOnRouteChange(): void {
    this.route.children.forEach((route: ActivatedRoute) => {
      let activeRoute: ActivatedRoute = route;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
      }
      this.routeOptions = activeRoute.snapshot.data;
    });

    if (this.routeOptions) {
      if (this.routeOptions.hasOwnProperty('title')) {
        this.setTitle(this.routeOptions.title);
      }
    }
  }

  setTitle(newTitle: string): void {
    this.titleService.setTitle(`${newTitle} | Biztech`);
  }
}
