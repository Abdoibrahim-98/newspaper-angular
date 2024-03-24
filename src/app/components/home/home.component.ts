import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/articles.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   
  page = 1; // current page number
  pageSize = 3; // number of items per page

  items: string[] = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://image.api.playstation.com/vulcan/ap/rnd/202307/2718/802aece37ac11795d94f10efbaf81bc680d8e1e2ab3648be.jpg?w=440','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://deadline.com/wp-content/uploads/2021/02/Avatar-The-Last-Airbender-Legend-Of-Aang-Nickelodeon-Nick-ATLA-ATLOA-e1655304503771.jpg?w=1024'];// your array of items to paginate
  topArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  businessArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  politicArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  sportArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  healthArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  designArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  popularArticlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);

  
  topArticles: Article[] = [];
  businessArticles: Article[] = [];
  politicArticles: Article[] = [];
  sportArticles: Article[] = [];
  healthArticles: Article[] = [];
  designArticles: Article[] = [];
  popularArticles: Article[] = [];

  
  emitArrays() {
    this.topArticlesSubject.next(this.topArticles);
    this.businessArticlesSubject.next(this.businessArticles);
    this.politicArticlesSubject.next(this.politicArticles);
    this.sportArticlesSubject.next(this.sportArticles);
    this.healthArticlesSubject.next(this.healthArticles);
    this.designArticlesSubject.next(this.designArticles);
    this.popularArticlesSubject.next(this.popularArticles);
  }

  constructor(private articleService: ArticleService){}

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
    
    this.articleService.getTopBusinessCategoryHeadlines().subscribe(data => {
      this.businessArticles =  data.articles.slice(0, 3).map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });

    this.articleService.getTopPoliticsCategoryHeadlines().subscribe(data => {
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

    this.articleService.getTopSportCategoryHeadlines().subscribe(data => {
      this.sportArticles =  data.articles.map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
     this.updateSportArticles(this.sportArticles);
    });
    this.articleService.getTopHealthCategoryHeadlines().subscribe(data => {
      this.healthArticles =  data.articles.slice(0, 3).map(article => {
        const publishedAt = new Date(article.publishedAt);
        const now = new Date();
        const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
        return {
          ...article,
          minutesAgo: diff
        };
      })
    });
    this.articleService.getTopDesignCategoryHeadlines().subscribe(data => {
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

    this.articleService.getPopular().subscribe(data => {
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
      this.emitArrays();
  }

  updateSportArticles(articles: Article[]) {
    this.articleService.setSportArticles(articles);
  }


}
