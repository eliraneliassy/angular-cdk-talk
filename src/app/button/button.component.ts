import { Component, OnInit, ComponentFactoryResolver, ApplicationRef, Injector, AfterViewInit, OnDestroy, Inject, ViewChild } from '@angular/core';
import { CdkPortal, DomPortalHost } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal)
  private portal: CdkPortal;
  private host: DomPortalHost;
  constructor(
    private cfr: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.host = new DomPortalHost(
      this.document.getElementById('my-btn'),
      this.cfr, this.applicationRef, this.injector
    );

    this.host.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.host.detach();
  }

}
