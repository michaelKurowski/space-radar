import DangerLevel from './dangerLevels.enum'

class Threat {
    private size: number
    private dateMin: Date
    private dateMax: Date
    private dangerLevel: DangerLevel

    constructor(size: number, dateMin: Date, dateMax: Date, dangerLevel: DangerLevel) {
        this.size = size
        this.dateMin = dateMin
        this.dateMax = dateMax
        this.dangerLevel = dangerLevel
    }

    getSize() {
        return this.size
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