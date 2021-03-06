import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { FamilyComponent } from './family/family.component';
import { ContactComponent } from './contact/contact.component';
import {SpeciesComponent} from './species/species.component';
import {FilipTestComponent} from './filip-test/filip-test.component';
import {AddressListComponent} from './address-list/address-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'family/:name', component: SpeciesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: FilipTestComponent },
  { path: 'address', component: AddressListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
