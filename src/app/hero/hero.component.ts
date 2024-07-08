import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state(
  //       'open',
  //       style({
  //         height: '200px',
  //         opacity: 1,
  //         backgroundColor: 'yellow',
  //       }),
  //     ),
  //     state(
  //       'closed',
  //       style({
  //         height: '100px',
  //         opacity: 0.8,
  //         backgroundColor: 'blue',
  //       }),
  //     ),
  //     transition('open => closed', [animate('1s')]),
  //     transition('closed => open', [animate('0.5s')]),

  //   ]),
  // ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {
  // isOpen = true;
  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
}
