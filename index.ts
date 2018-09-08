import angular from 'angular'
import core from './core/core'
import theme from './theme/theme'

core(angular)
theme(angular)
const app = angular.module('app', ['app.core', 'app.theme'])


