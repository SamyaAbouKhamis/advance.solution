import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  images: string[] = [
    './assets/work/1.jpg',
    './assets/work/2.jpg',
    './assets/work/3.jpg',
    './assets/work/4.jpg',

    // './assets/work/5.jpg',
    // './assets/work/6.jpg',
    './assets/work/7.jpg',
    './assets/work/8.jpg',

    './assets/work/9.jpg',
    './assets/work/10.jpg',

    './assets/work/11.jpg',
    './assets/work/12.jpg',

    './assets/work/13.jpg',

    './assets/work/14.jpg',
    './assets/work/15.jpg',
    './assets/work/16.jpg',
    './assets/work/17.jpg',
    './assets/work/18.jpg',
    './assets/work/19.jpg',
    './assets/work/20.jpg',
    './assets/work/21.jpg',
    './assets/work/22.jpg',
    './assets/work/23.jpg',
    './assets/work/24.jpg',
    './assets/work/25.jpg',
    './assets/work/26.jpg',
    './assets/work/27.jpg',
    './assets/work/28.jpg',
    './assets/work/29.jpg',
    './assets/work/30.jpg',
    './assets/work/31.jpg',
    // Add more image paths here
  ];
  currentImage: string = this.images[0];
  private currentIndex: number = 0;
  private intervalId: any;
  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 5 seconds
  }
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
}
