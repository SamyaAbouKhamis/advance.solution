import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ],
})
export class LoaderComponent implements OnInit {
  loaderStatus: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loaderStatus.subscribe((status) => {
      this.loaderStatus = status;
    });
  }
}
