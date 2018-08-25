import DangerLevel from './dangerLevels.enum'

class Threat {
    private dateMin: Date
    private dateMax: Date
    private dangerLevel: DangerLevel

    constructor( dateMin: Date, dateMax: Date, dangerLevel: DangerLevel) {
        this.dateMin = dateMin
        this.dateMax = dateMax
        this.dangerLevel = dangerLevel
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