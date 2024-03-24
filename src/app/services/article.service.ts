import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Article } from '../models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }


  getTopHeadlines(): Observable<any>{
    return this.http.get(`${environment.ROOT_URL}everything?q="trending"&sortBy=publishedAt&apiKey=${environment.apiKey}`)
  }

  getPopular(): Observable<any>{
    return this.http.get(`${environment.ROOT_URL}everything?q="trending"&sortBy=popularity&apiKey=${environment.apiKey}`)
  }

  getTopBusinessCategoryHeadlines(): Observable<any>{
    return this.http.get( `${environment.ROOT_URL}top-headlines?country=us&category=business&apiKey=${environment.apiKey}`)
  }

  getTopPoliticsCategoryHeadlines(): Observable<any>{
    return this.http.get( `${environment.ROOT_URL}top-headlines?country=us&category=politics&apiKey=${environment.apiKey}`)
  }
  getTopHealthCategoryHeadlines(): Observable<any>{
    return this.http.get( `${environment.ROOT_URL}top-headlines?country=us&category=health&apiKey=${environment.apiKey}`)
  }
  getTopDesignCategoryHeadlines(): Observable<any>{
    return this.http.get( `${environment.ROOT_URL}top-headlines?country=us&category=design&apiKey=${environment.apiKey}`)
  }
  getTopSportCategoryHeadlines(): Observable<any>{
    return this.http.get( `${environment.ROOT_URL}top-headlines?country=us&category=sport&apiKey=${environment.apiKey}`)
  }

  private sportArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  sportArticles$ = this.sportArticlesSubject.asObservable();

  setSportArticles(articles: Article[]) {
    this.sportArticlesSubject.next(articles);
  }
}
