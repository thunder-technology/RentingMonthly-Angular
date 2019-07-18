import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HouseRecordingComponent } from '../../house-recording/house-recording.component';
import { OwnerRecordingComponent } from '../../owner-recording/owner-recording.component';
import { LandlordTableComponent } from '../../landlord-table/landlord-table.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule, MatDialogModule, MatListModule
} from '@angular/material';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HouseInfoComponent} from '../../house-info/house-info.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule,
        AngularFontAwesomeModule,
        MatListModule,
    ],
  declarations: [
    DashboardComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    HouseRecordingComponent,
    OwnerRecordingComponent,
    LandlordTableComponent,
      HouseInfoComponent,
      HouseRecordingComponent
  ]
})

export class AdminLayoutModule {}
