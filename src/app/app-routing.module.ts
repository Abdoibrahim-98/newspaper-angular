import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { MoreComponent } from './components/more/more.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:name', component: CategoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent},
  { path: 'more', component: MoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
