export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbittType: string, operational: boolean) {
        this.name = name;
        this.orbittType = orbittType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    shouldShowWarning(): boolean {
        if (this.type.toLowerCase() === 'Space Debris'.toLowerCase()) {
            return true
        } else {
            return false
        }
    }

}
