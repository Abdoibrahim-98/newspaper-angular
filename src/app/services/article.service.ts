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


  
  private searchArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  searchArticles$ = this.searchArticlesSubject.asObservable();
  
  private topArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  topArticles$ = this.topArticlesSubject.asObservable();

 
  setSearchArticles(articles: Article[]){
    this.searchArticlesSubject.next(articles);
  }
  
  setTopArticles(articles: Article[]){
    this.topArticlesSubject.next(articles);
  }
}
