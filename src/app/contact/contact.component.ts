import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMap,GoogleMapsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  map!: google.maps.Map;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapDiv = document.getElementById('map') as HTMLElement;
    if (mapDiv) {
      const mapOptions: google.maps.MapOptions = {
        center: new google.maps.LatLng(37.7749, -122.4194),
        zoom: 8
      };
      this.map = new google.maps.Map(mapDiv, mapOptions);
    }
  }
  

 
}