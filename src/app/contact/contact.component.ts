import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

import emailjs from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMap, GoogleMapsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  map!: google.maps.Map;

  ngOnInit(): void {}

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }

  // initMap(): void {
  //   const mapDiv = document.getElementById('map') as HTMLElement;
  //   if (mapDiv) {
  //     const mapOptions: google.maps.MapOptions = {
  //       center: new google.maps.LatLng(37.7749, -122.4194),
  //       zoom: 8,
  //     };
  //     this.map = new google.maps.Map(mapDiv, mapOptions);
  //   }
  // }
  contactForm: FormGroup;

  @ViewChild('contactFormRef') contactFormElement!: ElementRef;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.contactFormElement); // Check if the form element is correctly referenced
    if (this.contactForm.valid) {
      const serviceID = 'service_fpuw1d7'; // Replace with your actual service ID
      const templateID = 'template_o8tiamd'; // Replace with your actual template ID
      const userID = 'YbjUli9SiNbUjQTF3'; // Replace with your actual user ID

      emailjs
        .sendForm(
          serviceID,
          templateID,
          this.contactFormElement.nativeElement,
          userID
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    }
    // alert("has been sucsses")
  }

  openSnackBar(message: string) {
    this._snackBar.open('Done!!', undefined, {
      duration: 3000,
    });
  }
}