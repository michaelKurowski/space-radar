import ThreatsService from '../../core/threatsService/threatsService.class'
import Threat from '../../core/threatsService/threat.class'
class MainView {
    public x: number
    private threatsService: ThreatsService
    private $timeout: ng.ITimeoutService
    public threats: Threat[]
    public viewer: number[]
    constructor(threatsService: ThreatsService, $timeout: ng.ITimeoutService) {
        this.x = 2
        this.$timeout = $timeout
        this.threatsService = threatsService
        this.threats = []
        this.viewer = []
        this.updateThreats()
    }

    updateThreats() {
        console.log('updateThreats')
        this.threatsService.getThreats(0, 'Earth', 2)
            .subscribe((threats: Threat[]) => {
                this.$timeout(() => {
                    this.threats = threats
                    this.viewer = threats.map((thr: Threat) => thr.getSize())
                    console.log(threats, this.viewer)
                })
            })
    }
}

export default ['threats', '$timeout', MainView]