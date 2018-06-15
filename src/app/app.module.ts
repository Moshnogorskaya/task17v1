import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './shared/app-routing.module';

import { AppComponent } from './components/core/app.component';
import { SearchComponent } from './components/search-page/search/search.component';
import { ResultsComponent } from './components/search-page/results/results.component';
import { ListComponent } from './components/search-page/list/list.component';
import { DashboardComponent } from './components/search-page/dashboard/dashboard.component';
import { MyListComponent } from './components/my-list-page/my-list/my-list.component';
import { MyListListComponent } from './components/my-list-page/my-list-list/my-list-list.component';
import { MyListDashboardComponent } from './components/my-list-page/my-list-dashboard/my-list-dashboard.component';
import { MyListResultComponent } from './components/my-list-page/my-list-result/my-list-result.component';
import { UpdateReposDirective } from './shared/update-repos.directive';

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
    MyListResultComponent,
    UpdateReposDirective
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
