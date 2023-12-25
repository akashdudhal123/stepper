import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';
import { Routes } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterModule } from "@angular/router";
import { FlexboxComponent } from './flexbox/flexbox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatacentersComponent } from './datacenters/datacenters.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabFirstComponent } from './dashboard/tab/tab-first/tab-first.component';
import { TabSecondComponent } from './dashboard/tab/tab-second/tab-second.component';
import { TabThirdComponent } from './dashboard/tab/tab-third/tab-third.component';
import { MatIconModule } from '@angular/material/icon'

const route: Routes = [
  {
    path: "", component: DashboardComponent, children: [
      { path: "first-tab", component: TabFirstComponent },
      { path: "second-tab", component: TabSecondComponent },
      { path: "third-tab", component: TabThirdComponent }
    ]
  },
  { path: "Datacenters", component: DatacentersComponent },
  { path: "Applications", component: ApplicationsComponent },
  { path: "first-tab", component: TabFirstComponent },
  { path: "second-tab", component: TabSecondComponent },
  { path: "third-tab", component: TabThirdComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    FlexboxComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    DatacentersComponent,
    ApplicationsComponent,
    TabFirstComponent,
    TabSecondComponent,
    TabThirdComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterOutlet,
    MatTabsModule,
    RouterModule.forRoot(route),
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
