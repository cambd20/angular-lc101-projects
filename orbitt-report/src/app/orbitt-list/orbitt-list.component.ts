import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbitt-list',
  templateUrl: './orbitt-list.component.html',
  styleUrls: ['./orbitt-list.component.css']
})
export class OrbittListComponent implements OnInit {

  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
    this.satellites.sort(function (a: Satellite, b: Satellite): number {
      if (a[column] < b[column]) {
        return -1;
      } else if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }

}
