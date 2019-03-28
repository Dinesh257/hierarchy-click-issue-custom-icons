import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSort, faSortUp } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);
library.add(faSortUp);

const routes: Routes = [
  { path: '', loadChildren: 'app/test/test.module#TestModule' }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule, WjGridModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
