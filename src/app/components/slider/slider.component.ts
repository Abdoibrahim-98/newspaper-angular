import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy{
  @Input() slides: string[] = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'];
  currentIndex = 0;
  private intervalId: any;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit() {
}

ngOnDestroy() {
    clearInterval(this.intervalId);
}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }


}
