import Visibility from './visibility.enum';
import { Moment } from 'moment';

class Threat {
    private dateMin: Moment
    private dateMax: Moment
    private name: string

    constructor(name: string ,dateMin: Moment, dateMax: Moment, private visibility: Visibility) {
        this.dateMin = dateMin
        this.dateMax = dateMax
        this.name = name
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

    getName() {
        return this.name
    }
}

export default Threat