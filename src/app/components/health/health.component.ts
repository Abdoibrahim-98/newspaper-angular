import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent implements OnInit, OnDestroy {
  healthArticles: Article[];
  private subscriptions: Subscription[]= [];

  constructor(private articleServie: ArticleService){
    this.subscriptions.push(this.articleServie.healthArticles$.subscribe(articles => {
      this.healthArticles = articles;
    }));
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
