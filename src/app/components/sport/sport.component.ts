
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../../models/articles.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent implements OnInit, OnDestroy {
  sportArticles: Article[];
  private subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.sportArticles$.subscribe(articles => {
      this.sportArticles = articles;
    }));
  }

  ngOnInit(): void {
    console.log(this.sportArticles);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}