import QueryOptions from '../../apiConnection/queryOptions.interface'
import Threat from './threat.class'
import {Observable, Observer} from 'rxjs'
import ApiConnector from '../../apiConnection/apiConnector.class'
import moment from 'moment'
import DangerLevels from './dangerLevels.enum'
import ResponseParameters from '../../apiConnection/responseParameters.interface'
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

    private async prepareResponse(): Promise<Threat[]> {
        return await this.threatsMocks
    }

    getThreats(days:number,body:String, dangerLevel:DangerLevels): Observable<Threat[]> {
        const dateFrom = moment().format(this.DATE_FORMAT) 
        const dateTo = moment().add(days,'days').format(this.DATE_FORMAT)
        const queryOptions: QueryOptions = {
            dateFrom,
            dateTo
        }
        

        return Observable.create(async (observer: Observer<Threat[]>) => {
           const response = await this.prepareResponse()
           observer.next(response)
        } )
    }
}
export default ThreatsService