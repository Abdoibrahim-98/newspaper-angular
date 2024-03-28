import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { SliderComponent } from '@components/slider/slider.component';
import { HomeComponent } from '@components/home/home.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ContactComponent } from '@components/contact/contact.component';
import { CategoryComponent } from '@components/category/category.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubscribeComponent } from '@components/subscribe/subscribe.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from '@components/search/search.component';
import { FormsModule } from '@angular/forms';
import { MoreComponent } from '@components/more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    CategoryComponent,
    SubscribeComponent,
    SearchComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbCarouselModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
