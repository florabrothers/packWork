import { Routes, RouterModule } from '@angular/router';

import { WorkbenchComponent } from './workbench/workbench.component';
import { CommunityComponent} from './community/community.component';

const routes: Routes = [
    {
        path: '',
        component: WorkbenchComponent
    },
    {
        path: 'problems',
        component: WorkbenchComponent
    },
    {
        path: 'community',
        component: CommunityComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
