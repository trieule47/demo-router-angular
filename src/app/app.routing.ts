import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CustomerComponent } from './customer/customer.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

export const AppRoutes: Routes = 
    [
        {
            path: '',
            component: ChildComponent,
        },
        {
            path: 'customer',
            pathMatch: 'prefix',
            component: CustomerComponent,
            children: [
                {
                    path: 'trieu',
                    pathMatch: 'prefix',
                    loadChildren: './customer/customerModule.module#CustomerModule',
                }
            ]
        },
        {
            path: 'dynamic',
            component: DynamicComponentComponent
        }
    ]