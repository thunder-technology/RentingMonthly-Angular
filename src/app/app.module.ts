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
  DialogOverviewExampleDialogComponent,
} from './landlord-table/landlord-table.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ExtraInfoComponent } from './extra-info/extra-info.component';

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
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DialogOverviewExampleDialogComponent,
    ConfirmDialogComponent,
    ExtraInfoComponent,
  ],
  entryComponents: [
      DialogOverviewExampleDialogComponent,
      ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
