import Visibility from './visibility.enum';

class Threat {
    private dateMin: Date
    private dateMax: Date

    constructor( dateMin: Date, dateMax: Date, private visibility: Visibility) {
        this.dateMin = dateMin
        this.dateMax = dateMax
    }

    getVisibility() {
        return this.visibility
    }

    getDateMin() {
        return this.dateMin
    }

    getDateMax() {
        return this.dateMax
    }
}

export default Threat