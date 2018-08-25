import RequestParameters from "./requestParameters.interface";
import QueryOptions from "./queryOptions.interface";

const nameof = <T>(name: keyof T) => name

export default new Map<keyof QueryOptions, keyof RequestParameters>([
    [nameof<QueryOptions>('dateFrom'), nameof<RequestParameters>('date-min') ],
    [nameof<QueryOptions>('dateTo'), nameof<RequestParameters>('date-max')],
    [nameof<QueryOptions>('distanceMin'), nameof<RequestParameters>('dist-min')],
    [nameof<QueryOptions>('body'), nameof<RequestParameters>('body')]
])
