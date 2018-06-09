import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyListListComponent } from './my-list-list/my-list-list.component';
import { MyListDashboardComponent } from './my-list-dashboard/my-list-dashboard.component';
import { MyListResultComponent } from './my-list-result/my-list-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    ListComponent,
    DashboardComponent,
    MyListComponent,
    MyListListComponent,
    MyListDashboardComponent,
    MyListResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
