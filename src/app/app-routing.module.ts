import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { BusinessComponent } from './components/business/business.component';
import { HealthComponent } from './components/health/health.component';
import { DesignComponent } from './components/design/design.component';
import { SportComponent } from './components/sport/sport.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'health', component: HealthComponent },
  { path: 'design', component: DesignComponent },
  { path: 'sport', component: SportComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
