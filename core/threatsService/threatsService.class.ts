import QueryOptions from '../../apiConnection/queryOptions.interface'
import Threat from './threat.class'
import {Observable, Observer} from 'rxjs'
import ApiConnector from '../../apiConnection/apiConnector.class'
import moment from 'moment'
class ThreatsService {
    private apiConnector: ApiConnector
    private threatsMocks = [
        new Threat(30,new Date(), new Date(), 3),
        new Threat(12,new Date(), new Date(), 1),
        new Threat(5,new Date(), new Date(), 0),
        new Threat(54,new Date(), new Date(), 1),
        new Threat(10,new Date(), new Date(), 3),
        new Threat(9,new Date(), new Date(), 1),
        new Threat(2,new Date(), new Date(), 0),
    ]

    constructor() {
        this.apiConnector = new ApiConnector()
    }


    getThreats(days:number, body:string, dangerLevel: number): Observable<Threat[]> {
        const actualDate = moment().format('YYYY-MM-DD') 
        const queryOptions: QueryOptions = {
            dateFrom: actualDate,
            dateTo: actualDate,
            distanceMin: dangerLevel.toString(),
            body
        }

        this.apiConnector.getThreats(queryOptions)

        return Observable.create((observer: Observer<Threat[]>) => {
            observer.next(this.threatsMocks)
        } )
    }
}
export default ThreatsService