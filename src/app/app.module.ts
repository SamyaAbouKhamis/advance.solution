import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule,BrowserAnimationsModule, ReactiveFormsModule,CommonModule],
  declarations: [],
  bootstrap: [],
})
export class AppModule {}