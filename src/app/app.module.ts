import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { FamilyComponent } from './family/family.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { FilipTestComponent } from './filip-test/filip-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    FamilyComponent,
    ContactComponent,
    SearchComponent,
    FilipTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
