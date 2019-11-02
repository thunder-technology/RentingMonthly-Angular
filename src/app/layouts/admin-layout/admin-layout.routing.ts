import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HouseRecordingComponent } from '../../house-recording/house-recording.component';
import { HouseInfoComponent } from '../../house-info/house-info.component';
import {ResidentTableComponent} from '../../resident-table/resident-table.component';
import {LandlordTableComponent} from '../../landlord-table/landlord-table.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',       component: DashboardComponent },
    { path: 'table-list',      component: TableListComponent },
    { path: 'typography',      component: TypographyComponent },
    { path: 'icons',           component: IconsComponent },
    { path: 'notifications',   component: NotificationsComponent },
    { path: 'upgrade',         component: UpgradeComponent },
    { path: 'house-info',      component: HouseInfoComponent},
    { path: 'resident-info', component: ResidentTableComponent},
    { path: 'house-recording', component: HouseRecordingComponent },
    { path: 'landlord-table', component: LandlordTableComponent}
];
