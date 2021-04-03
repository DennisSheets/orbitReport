export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning () {
        if (this.type === 'Space Debris'){
            //console.log("true")
            return  true;
        } else {
            //console.log("false")
            return false
        }
    }
}
