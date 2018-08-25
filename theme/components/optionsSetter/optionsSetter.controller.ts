
import DangerLevels from '../../../core/threatsService/dangerLevels.enum'
import * as _ from 'lodash'

interface OptionsSetterScope extends ng.IScope {
    dangerLevel: DangerLevels,
    daysToHit: string
}

class OptionsSetter {
    public dangerLevels: string[]
    public $scope: OptionsSetterScope
    public submitCallback: Function
    constructor($scope: OptionsSetterScope) {
        this.dangerLevels = this.getDangerLevels()
        this.$scope = $scope
        this.submitCallback = () => {}
    }

    getDangerLevels() {
        let result: string[] = []
        _.forEach(DangerLevels, entry => {
            if (typeof entry === 'string')
                result.push(entry)
        })
        
        return result
    }

    submit() {
        console.log(this.$scope, this)
        this.submitCallback(this.$scope.dangerLevel, parseInt(this.$scope.daysToHit))
    }
}

export default ['$scope', OptionsSetter]