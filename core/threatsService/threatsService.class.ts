import QueryOptions from '../../apiConnection/queryOptions.interface'
import Threat from './threat.class'
import {Observable, Observer} from 'rxjs'
import ApiConnector from '../../apiConnection/apiConnector.class'
import moment from 'moment'
class ThreatsService {
    private DATE_FORMAT:string = 'YYYY-MM-DD'
    private apiConnector: ApiConnector
    private threatsMocks = [
        new Threat(new Date(), new Date(), 3),
        new Threat(new Date(), new Date(), 1),
        new Threat(new Date(), new Date(), 0),
        new Threat(new Date(), new Date(), 1),
        new Threat(new Date(), new Date(), 3),
        new Threat(new Date(), new Date(), 1),
        new Threat(new Date(), new Date(), 0),
    ]

    constructor() {
        this.apiConnector = new ApiConnector()
    }


    getThreats(days:number, body:string, dangerLevel: number): Observable<Threat[]> {
        const dateFrom = moment().format(this.DATE_FORMAT) 
        const dateTo = moment().add(days,'days').format(this.DATE_FORMAT)
        const queryOptions: QueryOptions = {
            dateFrom,
            dateTo,
            distanceMin: dangerLevel.toString(),
            body
        }

        const receivedThreats = this.apiConnector.getThreats(queryOptions)

        const listOfThreats:Threat[] = []
        return Observable.create((observer: Observer<Threat[]>) => {
            observer.next(listOfThreats)
        } )
    }
}
export default ThreatsService