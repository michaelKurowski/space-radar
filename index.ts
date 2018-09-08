import angular from 'angular'
import core from './core/core'
import theme from './theme/theme'

core(angular)
theme(angular)
const app = angular.module('app', ['app.core', 'app.theme'])

import ThreatService from './core/threatsService/threatsService.class'

const threatService = new ThreatService()

threatService.getThreats(25)


