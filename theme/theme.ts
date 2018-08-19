import mainViewComponent from './components/mainView'

export default function (angular: ng.IAngularStatic) {
    const theme = angular.module('app.theme', [])
    theme.controller('mainController', () => {} )
    theme.component('mainView', mainViewComponent)
}