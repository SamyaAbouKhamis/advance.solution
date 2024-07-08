import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




interface Image {
  src: string;
  category: string;
}


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsComponent {
  // images: string[] = [
  //   'assets/camera1.jpg',
  //   'assets/camea2.jpg',
  //   'assets/camea2.jpg',
  //   '../../assets/portfolio-1.jpg',
  //   '../../assets/portfolio-2.jpg',
  //   '../../assets/portfolio-3.jpg',

  // ];

  filteredImages: { src: string }[] = [
    { src: 'assets/dahua.png' },
    { src: 'assets/zk.png' },
    { src: 'assets/MMC.png' },
    { src: 'assets/qnap.png' },
    { src: 'assets/Mikrotik.png' },
    { src: 'assets/Logo-Ubiq.png' },
    { src: 'assets/qnap.png' },
    { src: 'assets/Seagate.png' },
    { src: 'assets/qnap.png' },
  ];
}
