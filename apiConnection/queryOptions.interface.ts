import DangerLevel from './dangerLevels.enum' 

export default interface QueryOptions {
    dateFrom: Date,
    dateTo: Date,
    dangerLevel: DangerLevel
}