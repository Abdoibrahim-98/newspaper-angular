import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '@services/article.service';
import { Article } from '@models/articles.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'newspaper';
  topArticles: Article[] = [];
  businessArticles: Article[] = [];
  politicArticles: Article[] = [];
  sportArticles: Article[] = [];
  healthArticles: Article[] = [];
  designArticles: Article[] = [];
  popularArticles: Article[] = [];

  constructor(private articleService: ArticleService){}
  ngOnInit(): void {
    this.articleService.getTopHeadlines('publishedAt').subscribe(data => {
      this.topArticles = data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article, 
          minutesAgo: diff
        };
      })
      this.articleService.setTopArticles(this.topArticles);
    });
  }
}
