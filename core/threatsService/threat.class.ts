import Visibility from './visibility.enum';
import { Moment, Duration } from 'moment';

class Threat {
    constructor(
        private name: string,
        private date: Moment,
        private dateSigma: Duration,
        private visibility: Visibility
    ) {}

    getVisibility() {
        return this.visibility
    }

    getDate() {
        return this.date
    }

    getDateSigma() {
        return this.dateSigma
    }

    getName() {
        return this.name
    }
}

export default Threat