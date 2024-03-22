import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  page = 1; // current page number
  pageSize = 3; // number of items per page

  items: string[] = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'];// your array of items to paginate
}
