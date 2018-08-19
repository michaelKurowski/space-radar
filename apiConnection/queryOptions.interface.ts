import DangerLevel from '../core/threatsService/dangerLevels.enum' 

export default interface QueryOptions {
    dateFrom: Date,
    dateTo: Date,
    dangerLevel: DangerLevel
}