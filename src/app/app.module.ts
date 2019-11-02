import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {
    ConfirmDialogComponent,
    DialogComponent,
} from './landlord-table/landlord-table.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HouseExtraInfoDialogComponent } from './house-info/house-extra-info-dialog/house-extra-info-dialog.component';
import { HouseInfoDeleteConfirmDialogComponent } from
        './house-info/house-info-delete-confirm-dialog/house-info-delete-confirm-dialog.component';
import { ResidentDialogComponent } from './resident-table/resident-dialog/resident-dialog.component';
import {ResidentConfirmDialogComponent} from './resident-table/resident-table.component';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAlnyvh4roEAnH79s8cRKarzxn71kAAn_0'
        }),
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        AngularFontAwesomeModule,
        MatListModule
    ],
  'declarations': [
    AppComponent,
    AdminLayoutComponent,
    DialogComponent,
    ConfirmDialogComponent,
    HouseExtraInfoDialogComponent,
    HouseInfoDeleteConfirmDialogComponent,
    ResidentDialogComponent,
      ResidentConfirmDialogComponent
  ],
  entryComponents: [
      DialogComponent,
      ConfirmDialogComponent,
      HouseExtraInfoDialogComponent,
      ResidentDialogComponent,
      ResidentConfirmDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
