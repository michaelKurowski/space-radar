import mainViewComponent from './components/mainView.component'
import optionsSetterComponent from './components/optionsSetter/optionsSetter.component'
import threatsViewerComponent from './components/threatsViewer/threatsViewer.component'


export default function (angular: ng.IAngularStatic) {
    const theme = angular.module('app.theme', [])
    theme.controller('mainController', () => {} )
    theme.component('mainView', mainViewComponent)
    theme.component('optionsSetter', optionsSetterComponent)
    theme.component('threatsViewer', threatsViewerComponent)
}