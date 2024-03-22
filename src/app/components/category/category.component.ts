import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  page = 1; // current page number
  pageSize = 3; // number of items per page

  items: string[] = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://image.api.playstation.com/vulcan/ap/rnd/202307/2718/802aece37ac11795d94f10efbaf81bc680d8e1e2ab3648be.jpg?w=440','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://deadline.com/wp-content/uploads/2021/02/Avatar-The-Last-Airbender-Legend-Of-Aang-Nickelodeon-Nick-ATLA-ATLOA-e1655304503771.jpg?w=1024'];// your array of items to paginate

  
}
