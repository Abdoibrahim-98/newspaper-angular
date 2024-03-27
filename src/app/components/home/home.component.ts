import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/articles.model';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  isCollapsed: boolean = true;
  page = 1; // current page number
  pageSize = 3; // number of items per page

  private subscriptions: Subscription[] = [];
 
  topArticles: Article[] = [];
  businessArticles: Article[] = [];
  politicArticles: Article[] = [];
  sportArticles: Article[] = [];
  healthArticles: Article[] = [];
  designArticles: Article[] = [];
  popularArticles: Article[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.businessArticles$.subscribe(articles => {
      this.businessArticles = articles;
    }));
    this.subscriptions.push(this.articleService.designArticles$.subscribe(articles => {
      this.designArticles = articles;
    }));
    this.subscriptions.push(this.articleService.healthArticles$.subscribe(articles => {
      this.healthArticles = articles;
    }));
    this.subscriptions.push(this.articleService.politicArticles$.subscribe(articles => {
      this.politicArticles = articles;
    }));
    this.subscriptions.push(this.articleService.sportArticles$.subscribe(articles => {
      this.sportArticles = articles;
    }));
    this.subscriptions.push(this.articleService.popularArticles$.subscribe(articles => {
      this.popularArticles = articles;
    }));
  }

  ngOnInit(): void {
    this.articleService.getTopHeadlines().subscribe(data => {
      this.topArticles = data.articles.map(article => {
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
