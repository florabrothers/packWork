import { Routes, RouterModule } from '@angular/router';

import { WorkbenchComponent } from './workbench/workbench.component';
import { CommunityComponent } from './community/community.component';
import { SetsComponent } from './workbench/sets/sets.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: WorkbenchComponent
    },
    {
        path: 'community',
        component: CommunityComponent
    },
    // sets will be a sub path in the future, right now its like this for development
    {
        path: 'sets',
        component: SetsComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
