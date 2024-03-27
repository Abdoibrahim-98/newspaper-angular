import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit, OnDestroy {
  designArticles: Article[];
  private subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.designArticles$.subscribe(articles => {
      this.designArticles = articles;
    }));
  }

  ngOnInit(): void {
    console.log(this.designArticles);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
