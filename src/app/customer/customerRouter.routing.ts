import { Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';

export const CustomerRouter: Routes = 
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
