import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./sections/main/pages/main-sections/main-sections.component')
    },
    {
        path: 'aipap-agua',
        loadComponent: () => import('./sections/main/pages/aipap-agua/aipap-agua.component')
    },
    {
        path: 'aipap-tierra',
        loadComponent: () => import('./sections/main/pages/aipap-tierra/aipap-tierra.component')
    },
    {
        path: '**',
        redirectTo: ''
    }
];

