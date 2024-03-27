import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent implements OnInit, OnDestroy {
  businessArticles: Article[];
  private subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.businessArticles$.subscribe(articles => {
      this.businessArticles = articles;
    }));
  }

  ngOnInit(): void {
   
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
