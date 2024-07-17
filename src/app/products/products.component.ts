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
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216728/dahua_hpfgcc.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216764/MMC_z0negg.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216754/Mikrotik_lppz23.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216753/Logo-Ubiq_ik9mn6.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216765/qnap_nhr9n2.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216773/zk_jj144x.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216770/Seagate_hpidai.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216728/dahua_hpfgcc.png',
    },
    {
      src: 'https://res.cloudinary.com/dqrorqtyj/image/upload/v1721216754/Mikrotik_lppz23.png',
    },
  ];
}
