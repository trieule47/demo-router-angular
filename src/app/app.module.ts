import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { CustomerComponent } from './customer/customer.component';
import { InfoComponent } from './customer/info/info.component';
import { LoginComponent } from './customer/login/login.component';
import { CustomerModule } from './customer/customerModule.module';


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    ChildComponent,
    CustomerComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomerModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChildComponent],
})
export class AppModule { }
