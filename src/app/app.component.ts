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
      this.articleService.setBusinessArticles(this.businessArticles);
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
      this.articleService.setPoliticArticles(this.politicArticles);
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
      this.articleService.setSportArticles(this.sportArticles);
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
      this.articleService.setHealthArticles(this.healthArticles);
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
      this.articleService.setDesignArticles(this.designArticles);
      console.log(this.designArticles);
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
      this.articleService.setPopularArticles(this.popularArticles);
    });

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
