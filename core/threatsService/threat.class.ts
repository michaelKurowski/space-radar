import DangerLevel from './dangerLevels.enum'
import Visibility from './visibility.enum';

class Threat {
    private dateMin: Date
    private dateMax: Date
    private dangerLevel: DangerLevel

    constructor( dateMin: Date, dateMax: Date, dangerLevel: DangerLevel, private visibility: Visibility) {
        this.dateMin = dateMin
        this.dateMax = dateMax
        this.dangerLevel = dangerLevel
    }

    getVisibility() {
        return this.visibility
    }

    getDangerLevel() {
        return this.dangerLevel
    }

    getDateMin() {
        return this.dateMin
    }

    getDateMax() {
        return this.dateMax
    }
}

export default Threat