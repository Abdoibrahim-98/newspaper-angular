import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrl: './politics.component.css'
})
export class PoliticsComponent implements OnInit, OnDestroy {
  politicArticles: Article[];
  private subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.politicArticles$.subscribe(articles => {
      this.politicArticles = articles;
    }));
  }

  ngOnInit(): void {
    console.log(this.politicArticles);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
