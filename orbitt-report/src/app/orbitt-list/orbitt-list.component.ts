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

}


