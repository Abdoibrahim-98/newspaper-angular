import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environments/environment.prod';
import { Article } from '@models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }


  getTopHeadlines(sortedBy: string): Observable<any>{
    return this.http.get(`${environment.ROOT_URL}everything?q="trending"&sortBy=${sortedBy}&apiKey=${environment.apiKey}`)
  }


  getTopCategoryHeadlines(category: string): Observable<any>{
    return this.http.get( `${environment.ROOT_URL}top-headlines?country=us&category=${category}&apiKey=${environment.apiKey}`)
  }

  searchArticles(searchTerm: string): Observable<any> {
    const url = `${environment.ROOT_URL}everything?q=${searchTerm}&from=2024-03-27&to=2024-03-27&sortBy=publishedAt&apiKey=${environment.apiKey}`;
    return this.http.get(url);
  }

  private sportArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  sportArticles$ = this.sportArticlesSubject.asObservable();

  private politicArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  politicArticles$ = this.politicArticlesSubject.asObservable();

  private healthArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  healthArticles$ = this.healthArticlesSubject.asObservable();

  private businessArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  businessArticles$ = this.businessArticlesSubject.asObservable();

  private designArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  designArticles$ = this.designArticlesSubject.asObservable();

  private popularArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  popularArticles$ = this.popularArticlesSubject.asObservable();
  
  private searchArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  searchArticles$ = this.searchArticlesSubject.asObservable();
  
  private trendingArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  trendingArticles$ = this.trendingArticlesSubject.asObservable();
  
  private topArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  topArticles$ = this.topArticlesSubject.asObservable();

  setSportArticles(articles: Article[]) {
    this.sportArticlesSubject.next(articles);
  }

  setPoliticArticles(articles: Article[]) {
    this.politicArticlesSubject.next(articles);
  }

  setHealthArticles(articles: Article[]){
    this.healthArticlesSubject.next(articles);
  }

  setBusinessArticles(articles:Article[]){
    this.businessArticlesSubject.next(articles);
  }

  setDesignArticles(articles: Article[]){
    this.designArticlesSubject.next(articles);
  }

  setPopularArticles(articles: Article[]){
    this.popularArticlesSubject.next(articles);
  }
 
  setSearchArticles(articles: Article[]){
    this.searchArticlesSubject.next(articles);
  }
  
  setTrendingArticles(articles: Article[]){
    this.trendingArticlesSubject.next(articles);
  }
 
  setTopArticles(articles: Article[]){
    this.topArticlesSubject.next(articles);
  }
}
