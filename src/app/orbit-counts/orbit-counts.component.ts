import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  
  constructor() { }

  ngOnInit() {
  }
  //          - Gerard notes
  // function will return number of satellites
  // corresponding to given type

  // function accepts satellite type 
  // (a string ex. "Space Debris")
  // as a parameter
  // {{myCountFunction('Space Debris')}} 


  

}
