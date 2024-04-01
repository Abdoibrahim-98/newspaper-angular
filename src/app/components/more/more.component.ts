import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '@models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '@services/article.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrl: './more.component.css'
})
export class MoreComponent implements OnInit, OnDestroy {
  moreArticles: Article[];
  private subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.topArticles$.subscribe(articles => {
      this.moreArticles = articles;
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
