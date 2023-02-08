import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit, AfterViewInit {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  items = [
    {name: 'Trieu', id: true},
    {name: 'Trieu2', id: false},
    {name: 'Trieu3', id: false},
    {name: 'Trieu4', id: false},
    {name: 'Trieu5', id: true},
    {name: 'Trieu6', id: true},
    {name: 'Trieu7', id: true},
    {name: 'Trieu8', id: true},
  ]

  show = true;

  @ViewChild('container', { read: ViewContainerRef})
  containerRef;

  @ViewChild('container2' , {read: ElementRef})
  containerRef2;

  ngOnInit() {
    console.log(this.containerRef);
    console.log(this.containerRef2);
  }
  
  ngAfterViewInit(): void {
    console.log(this.containerRef);
    console.log(this.containerRef2);
  }

  createComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
    this.viewContainerRef.createComponent(factory);
  }

  destroyComponent() {
    this.viewContainerRef.clear();
  }

  createComponentTwo() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
    const componentRef = this.containerRef.createComponent(factory);
    componentRef.instance.data = "Tương tác với Dynamic component";
  }

}
