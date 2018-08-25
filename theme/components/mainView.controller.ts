import ThreatsService from '../../core/threatsService/threatsService.class'
import Threat from '../../core/threatsService/threat.class'
import DangerLevels from '../../core/threatsService/dangerLevels.enum'
class MainView {
    public x: number
    private threatsService: ThreatsService
    private $timeout: ng.ITimeoutService
    public threats: Threat[]
    public bindedFilter: Function
    constructor(threatsService: ThreatsService, $timeout: ng.ITimeoutService) {
        this.x = 2
        this.$timeout = $timeout
        this.threatsService = threatsService
        this.threats = []
        this.bindedFilter = this.filter.bind(this)
        this.updateThreats()
    }

    updateThreats(dangerLevel: DangerLevels = DangerLevels.Severe, daysToHit: number = 30) {
        this.threatsService.getThreats(daysToHit, 'Earth', dangerLevel)
            .subscribe((threats: Threat[]) => {
                this.$timeout(() => {
                    this.threats = threats
                })
            })
    }

    filter(dangerLevel: DangerLevels, daysToHit: number) {
        this.updateThreats(dangerLevel, daysToHit)
    }
}

export default ['threats', '$timeout', MainView]