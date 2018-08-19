import QueryOptions from './queryOptions.interface'
import { Observable } from 'rxjs'
import Threat from './threat.class'
class ThreatsService {
    constructor() {

    }

    getThreats(options: QueryOptions): Observable<Threat[]> {
    }
}
export default ThreatsService