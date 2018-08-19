import threatsService from './threatsService/threatsService.service'
export default function (angular: ng.IAngularStatic) {
    const core = angular.module('app.core', [])
    core.service('threats', threatsService)
}