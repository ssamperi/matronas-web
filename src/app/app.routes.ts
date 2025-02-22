import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'hola',
        loadComponent: () => import('./core/main/pages/main-sections/main-sections.component')
    },
    {
        path: 'aipap-agua',
        loadComponent: () => import('./core/main/pages/aipap-agua/aipap-agua.component')
    },
    {
        path: 'aipap-tierra',
        loadComponent: () => import('./core/main/pages/aipap-tierra/aipap-tierra.component')
    },
    {
        path: '**',
        redirectTo: 'hola'
    }
];

