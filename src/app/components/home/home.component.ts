import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '@services/article.service';
import { Article } from '@models/articles.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  isCollapsed: boolean = true;
  page = 1; // current page number
  pageSize = 3; // number of items per page
 
  topArticles: Article[] = [];
  businessArticles: Article[] = [];
  politicArticles: Article[] = [];
  sportArticles: Article[] = [];
  healthArticles: Article[] = [];
  designArticles: Article[] = [];
  popularArticles: Article[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.topArticles$.subscribe(articles => {
      this.topArticles = articles;
    }));
  }

  ngOnInit(): void {
    this.articleService.getTopCategoryHeadlines('business').subscribe(data => {
      this.businessArticles =  data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });

    this.articleService.getTopCategoryHeadlines('politics').subscribe(data => {
      this.politicArticles =  data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });

    this.articleService.getTopCategoryHeadlines('sport').subscribe(data => {
      this.sportArticles =  data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });
    this.articleService.getTopCategoryHeadlines('health').subscribe(data => {
      this.healthArticles =  data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });
    this.articleService.getTopCategoryHeadlines('technology').subscribe(data => {
      this.designArticles =  data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });

    this.articleService.getTopHeadlines('popularity').subscribe(data => {
      this.popularArticles =  data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
