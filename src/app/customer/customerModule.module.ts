import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';
// import { CustomerRouter } from './customerRouter.routing';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

const CustomerRouter: Routes = 
[
    {
        path: '',
        children: [
            {
                path: 'info',
                component: InfoComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(CustomerRouter),
        CommonModule
    ],
    declarations: [
        InfoComponent,
        LoginComponent
    ]
})
export class CustomerModule { }