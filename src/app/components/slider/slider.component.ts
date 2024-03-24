import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{
  @Input() topArticles: Article[];
 

  ngOnInit() {
}

}
