import { Component, Input } from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  @Input() count = 5;
  @Input() rating = 0;
  stars: boolean[]= [];

  ngOnInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
