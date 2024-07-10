
import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// Install Swiper modules


interface Image {
  src: string;
  category: string;
}


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent implements OnInit {
  swiperConfig: any;

  // images: string[] = [
  //   'assets/camera1.jpg',
  //   'assets/camea2.jpg',
  //   'assets/camea2.jpg',
  //   '../../assets/portfolio-1.jpg',
  //   '../../assets/portfolio-2.jpg',
  //   '../../assets/portfolio-3.jpg',

  // ];
  images: Image[] = [
    { src: 'assets/camera/00.png', category: 'Cameras' },
    { src: 'assets/camera/5.png', category: 'Cameras' },
    { src: 'assets/camera/3.png', category: 'Cameras' },
    { src: 'assets/camera/4.png', category: 'Cameras' },
    {
      src: './assets/camera/Image_N464E124C_WebsiteThumbnail.png',
      category: 'Servers',
    },
    { src: './assets/camera/11.png', category: 'Servers' },
    { src: './assets/camera/router.png', category: 'Networks' },
    { src: './assets/camera/resever.png', category: 'Networks' },
  ];
  filteredImages: Image[] = [...this.images];
  selectedCategory: string = 'All';

  filterImages(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredImages = [...this.images];
    } else {
      this.filteredImages = this.images.filter(
        (image) => image.category === category
      );
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.swiperConfig = {
      slidesPerView: 3,
      spaceBetween: 7,
      navigation: true,
    };
  }
}