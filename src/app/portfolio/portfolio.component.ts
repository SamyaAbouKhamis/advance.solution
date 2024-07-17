
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
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135092/00_bh33f6.png',
      category: 'Cameras',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135096/3_rxm8c2.png',
      category: 'Cameras',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135101/8_rww6j3.png',
      category: 'Cameras',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135103/9_xjowy4.png',
      category: 'Cameras',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135096/4_poonc4.png',
      category: 'Cameras',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135099/5_ytzggd.png',
      category: 'Cameras',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135099/6_fkyvj0.png',
      category: 'Cameras',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135099/7_caiwfi.png',
      category: 'Cameras',
    },

    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721135106/11_elzggy.webp',
      category: 'Servers',
    },

    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721209200/16._mr7ozt.webp',
      category: 'Servers',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721209199/15_soyd47.webp',
      category: 'Servers',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721209197/14_pydotv.webp',
      category: 'Servers',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721210058/17_qzsg0y.png',
      category: 'Networks',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721210066/18_hujb7d.png',
      category: 'Networks',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721210074/19_axrjjf.png',
      category: 'Networks',
    },
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