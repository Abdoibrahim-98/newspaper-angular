import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Article } from '@models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '@services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit, OnDestroy {
    articles: Article[];
    @Input() name: string;
    categoryName: string;
    page = 1; // current page number
    pageSize = 10; // number of items per page
    isCollapsed: boolean = true;
    popularArticles: Article[];
    private subscriptions: Subscription[]= [];
    categories :string[] = ['politics', 'business','technology','health','sport'];

    constructor(private route: ActivatedRoute, private articleService: ArticleService){
      this.subscriptions.push(this.articleService.topArticles$.subscribe(articles => {
        this.popularArticles = articles;
      }));
    }
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.categoryName = params['name'];
        if(this.categories.includes(this.categoryName)){
          this.articleService.getTopCategoryHeadlines(this.categoryName).subscribe(data => {
            this.articles =  data.articles.map(article => {
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
        else{
          this.articleService.searchArticles(this.categoryName).subscribe((data: any) => {
            this.articles =  data.articles.map(article => {
              const publishedAt = new Date(article.publishedAt);
              const now = new Date();
              const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
              return {
                ...article,
                minutesAgo: diff
              };
            })
         })
       }
      });
    }
  
    ngOnDestroy(): void {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  
}
