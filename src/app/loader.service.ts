import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderComponent } from './loader/loader.component';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loaderStatus = new BehaviorSubject<boolean>(false);
  loaderStatus = this._loaderStatus.asObservable();

  showLoader() {
    this._loaderStatus.next(true);
  }

  hideLoader() {
    this._loaderStatus.next(false);
  }
}
