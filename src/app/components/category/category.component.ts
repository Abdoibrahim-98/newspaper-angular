import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit, OnDestroy {
  @Input() articles: Article[];
  @Input() name: string;
  page = 1; // current page number
  pageSize = 10; // number of items per page
  isCollapsed: boolean = true;
    popularArticles: Article[];
    private subscriptions: Subscription[]= [];
  
    constructor(private articleServie: ArticleService){
      this.subscriptions.push(this.articleServie.popularArticles$.subscribe(articles => {
        this.popularArticles = articles;
      }));
    }
  
    ngOnInit(): void {
      
    }
  
    ngOnDestroy(): void {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  
}
