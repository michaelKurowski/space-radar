import DangerLevel from '../core/threatsService/dangerLevels.enum' 
import RequestParameters from './requestParameters.interface'
export default interface QueryOptions {
    dateFrom: RequestParameters['date-min'],
    dateTo: RequestParameters['date-max']
}