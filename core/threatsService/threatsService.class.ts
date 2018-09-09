import QueryOptions from '../../apiConnection/queryOptions.interface'
import Threat from './threat.class'
import {Observable, Observer} from 'rxjs'
import ApiConnector from '../../apiConnection/apiConnector.class'
import moment from 'moment'
import DangerLevels from './dangerLevels.enum'
import PhysicsUtils from './physicsUtils.class'
import ResponseParameters from '../../apiConnection/responseParameters.interface'
import DatesParser from './datesParser.class'
import {astronomicalUnits} from './units.interface'
class ThreatsService {
    private DATE_FORMAT:string = 'YYYY-MM-DD'
    private apiConnector: ApiConnector

    constructor() {
        this.apiConnector = new ApiConnector()
    }

    private async prepareResponse(responseParameters: ResponseParameters[]): Promise<Threat[]> {
        let threats: Threat[] = []

        responseParameters.forEach( object => {
            const distanceInParsecs = PhysicsUtils.convertAUtoParsecs(parseFloat(object.dist as string) as astronomicalUnits)
            const apparentMagnitude = PhysicsUtils.calculateApparentMagnitude(parseFloat(object.h as string), distanceInParsecs)
            const visibilityLevel = PhysicsUtils.getVisibilityLevel(apparentMagnitude)
            const date = DatesParser.parseApproachDate(object.cd as string)
            const dateSigma = DatesParser.parseTimeSigma(object.t_sigma_f as string)
            const objectName = object.des as string
            const threat = new Threat(objectName, date, dateSigma, visibilityLevel)
            threats.push(threat)
        })
        return threats
    }

    getThreats(days:number,body:string, dangerLevel:DangerLevels): Observable<Threat[]> {
        const dateFrom = moment().format(this.DATE_FORMAT) 
        const dateTo = moment().add(days,'days').format(this.DATE_FORMAT)
        const queryOptions: QueryOptions = {
            dateFrom,
            dateTo,
            body
        }
        

        return Observable.create(async (observer: Observer<Threat[]>) => {
           const response = await this.apiConnector.getResponse(queryOptions)
           const convertedResponse = await this.prepareResponse(response)
           observer.next(convertedResponse)
        } )
    }
}
export default ThreatsService