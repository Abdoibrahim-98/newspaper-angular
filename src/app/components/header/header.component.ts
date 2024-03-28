import { Component, HostListener } from '@angular/core';
import { ArticleService } from '@services/article.service';
import { Article } from '@models/articles.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavOpen: boolean = false;
  applyStyles: boolean = false;
  searchTerm: string;
  searchArticles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  setSearchArticles() {
    if (this.searchTerm) {
      this.articleService.searchArticles(this.searchTerm).subscribe((data: any) => {
        this.searchArticles =  data.articles.map(article => {
          const publishedAt = new Date(article.publishedAt);
          const now = new Date();
          const diff = Math.floor((now.getTime() - publishedAt.getTime()) / 60000);
          return {
            ...article,
            minutesAgo: diff
          };
        })
        this.articleService.setSearchArticles(this.searchArticles);
      });
      this.router.navigate(['/search']);
      console.log(this.searchArticles);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.applyStyles = window.innerWidth < 990;
      this.isNavOpen = window.innerWidth > 990 ? false : this.isNavOpen;
  }

  toggleNav(): void {
      this.isNavOpen = !this.isNavOpen;
  }
}
