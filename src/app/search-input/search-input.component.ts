import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Inject, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements AfterViewInit, OnDestroy {


  @ViewChild(CdkPortal) portal: CdkPortal;
  host: DomPortalOutlet;

  constructor(@Inject(DOCUMENT) private document: Document,
  private cfr: ComponentFactoryResolver,
  private appRef: ApplicationRef,
  private injector: Injector) { }

  ngAfterViewInit(): void {
    this.host = new DomPortalOutlet(
      this.document.getElementById('my-search'),
      this.cfr, this.appRef, this.injector
    );

    this.host.attach(this.portal);

  }
  ngOnDestroy(): void {
    this.host.detach();
  }


}
