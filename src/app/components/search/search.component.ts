import { Component } from '@angular/core';
import { Article } from '../../models/articles.model';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchArticles: Article[];
  private subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService){
    this.subscriptions.push(this.articleService.searchArticles$.subscribe(articles => {
      this.searchArticles = articles;
    }));
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
