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
  
    constructor(private route: ActivatedRoute, private articleService: ArticleService){
      this.subscriptions.push(this.articleService.popularArticles$.subscribe(articles => {
        this.popularArticles = articles;
      }));
    }
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.categoryName = params['name'];
        if(this.categoryName === "politics"){
          this.subscriptions.push(this.articleService.politicArticles$.subscribe(articles => {
            this.articles = articles;
          }));
        }
        else if(this.categoryName === "health"){
          this.subscriptions.push(this.articleService.healthArticles$.subscribe(articles => {
            this.articles = articles;
          }));
        }
        else if(this.categoryName === "design"){
          this.subscriptions.push(this.articleService.designArticles$.subscribe(articles => {
            this.articles = articles;
          }));
        }
        else if(this.categoryName === "sport"){
          this.subscriptions.push(this.articleService.sportArticles$.subscribe(articles => {
            this.articles = articles;
          }));
        }
        else if(this.categoryName === "business"){
          this.subscriptions.push(this.articleService.businessArticles$.subscribe(articles => {
            this.articles = articles;
          }));
        }

      });
    }
  
    ngOnDestroy(): void {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  
}
