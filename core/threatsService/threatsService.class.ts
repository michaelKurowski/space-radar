import QueryOptions from '../../apiConnection/queryOptions.interface'
import Threat from './threat.class'
import {Observable, Observer} from 'rxjs'
import DangerLevel from './dangerLevels.enum'
class ThreatsService {

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

    }

    private queryOptionsToParameters(options: QueryOptions) {

    }

    getThreats(days:number, body:string, dangerLevel: DangerLevel): Observable<Threat[]> {
        console.log(days, body, dangerLevel)
        return Observable.create((observer: Observer<Threat[]>) => {
            observer.next(this.threatsMocks)
        } )
    }
}
export default ThreatsService