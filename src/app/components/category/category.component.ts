import { Component, Input } from '@angular/core';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() articles: Article[];
  @Input() name: string;
  page = 1; // current page number
  pageSize = 10; // number of items per page

  
}
