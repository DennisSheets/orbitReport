import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass6-orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  // satTotal: number;
  // satSpaceDebris: number;
  // satCommunication: number;
  // satProbe: number;
  // satPositioning: number;
  // satSpaceStation: number;
  // satTelescope: number;
  // satType: string;
  // summaryList: number[];

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    // this.satTotal = 0;
    // this.satSpaceDebris = 0;
    // this.satCommunication = 0;
    // this.satProbe = 0;
    // this.satPositioning = 0;
    // this.satSpaceStation = 0;
    // this.satTelescope = 0;
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {
        //console.log(data.satellites.length);

        let fetchedSatellites = data.satellites;
        //this.satTotal = fetchedSatellites.length;
        //console.log(this.satTotal);  

        // TODO: loop over satellites
        
        for (let i =0; i < fetchedSatellites.length; i ++) {
          let satType = fetchedSatellites[i].type

          // if(satType === "Space Debris") {
          //   this.satSpaceDebris += 1;
          // }
          // if (satType === "Communication") {
          //   this.satCommunication += 1;
          // } 
          // if (satType === "Probe") {
          //   this.satProbe += 1;
          // }
          // if (satType === "Positioning") {
          //   this.satPositioning += 1;
          // }
          // if (satType === "Space Station") {
          //   this.satSpaceStation += 1;
          // }
          // if (satType === "Telescope") {
          //   this.satTelescope += 1;
          // }  
         
      // TODO: create a Satellite object using 
          let satellite = new Satellite(
              fetchedSatellites[i].name, 
              fetchedSatellites[i].type, 
              fetchedSatellites[i].launchDate, 
              fetchedSatellites[i].orbitType, 
              fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: 
          this.sourceList.push(satellite);
        };
        // make a copy of the sourceList to be shown to the user
        this.displayList = this.sourceList.slice(0);

        // console.log("spaceDebris: " + this.satSpaceDebris);
        // this.summaryList.push(this.satSpaceDebris)  
        // console.log("communication: " + this.satCommunication);  
        // console.log("probe: " + this.satProbe);
        // console.log("positioning: " + this.satPositioning);  
        // console.log("Space Station: " + this.satSpaceStation);  
        // console.log("Telescope: " + this.satTelescope);        
        
      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    // assign this.displayList to be the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
 }

 


//   constructor() {
//     this.sourceList = [
//        new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
//        new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
//        new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
//        new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
//        new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
//     ];
//  }
}
