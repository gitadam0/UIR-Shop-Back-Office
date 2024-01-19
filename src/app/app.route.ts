import {Routes} from '@angular/router';

// dashboard
import {IndexComponent} from './index';
import {AppLayout} from './layouts/app-layout';
import {AuthLayout} from './layouts/auth-layout';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            // dashboard
            {
                path: '',
                component: IndexComponent,
                title: 'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template'
            },
            {
                path: '',
                loadChildren: () => import('./modules/view-routing.module').then(m => m.ViewRoutingModule), // @Lazy loading
            }
            // ,
            // { path: '', loadChildren: () => import('./components/components.module').then((d) => d.ComponentsModule) },

        ],
    },

    {
        path: '',
        component: AuthLayout,
        children: [],
    },
];
