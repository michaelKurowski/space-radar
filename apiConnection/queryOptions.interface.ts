import RequestParameters from './requestParameters.interface'
export default interface QueryOptions {
    dateFrom: RequestParameters['date-min'],
    dateTo: RequestParameters['date-max'],
    body: RequestParameters['body']
}