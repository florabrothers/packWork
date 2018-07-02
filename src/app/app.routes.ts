import { Routes, RouterModule } from '@angular/router';

import { WorkbenchComponent } from './workbench/workbench.component';
import { CommunityComponent} from './community/community.component';

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
    // {
    //     path: 'sets',
    //     component: CommunityComponent
    // }
];

export const AppRoutes = RouterModule.forRoot(routes);
