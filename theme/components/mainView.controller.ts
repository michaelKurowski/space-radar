import ThreatsService from '../../core/threatsService/threatsService.class'
class MainView {
    public x: number
    private threatsService: ThreatsService
    constructor(threatsService: ThreatsService) {
        this.x = 2
        this.threatsService = threatsService
    }
}

export default ['threatsService', MainView]