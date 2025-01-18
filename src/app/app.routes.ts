import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'hola',
        loadComponent: () => import('./sections/main/components/main/main.component')
    },
    {
        path: '**',
        redirectTo: 'hola'
    }
];

