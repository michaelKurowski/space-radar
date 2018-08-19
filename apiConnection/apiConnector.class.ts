import RequestParameters from './requestParameters.interface'
import {map} from 'lodash'
class ApiConnector {

    private BASE_API_URL = 'https://ssd-api.jpl.nasa.gov/cad.api'


    constructRequestURL(requestParameters: RequestParameters): URL {
        /*
        {
            date-min: 30000,
            date-max: 2000,
            dupa: 'dupa123'
        }
        */
        
        parseParameters = map(requestParameters, )
        var urlWithParameters = this.BASE_API_URL + requestParameters
        return new URL('aaa')
    }
}

export default ApiConnector