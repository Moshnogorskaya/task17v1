import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // del
import { InMemoryDataService }  from './in-memory-data.service';
import { ResultsComponent } from './results/results.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyListComponent } from './my-list/my-list.component'; //del

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    ListComponent,
    DashboardComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
