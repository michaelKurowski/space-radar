import RequestParameters from './requestParameters.interface'
import QueryOptions from './queryOptions.interface'

class ApiConnector {

    private BASE_API_URL = 'https://ssd-api.jpl.nasa.gov/cad.api'
    private optionsToParamsMap: Map<String, String>
   
    constructor(){ 
    }

    constructRequestURL(requestParameters: RequestParameters): URL {
        /*
        {
            date-min: 30000,
            date-max: 2000,
            dupa: 'dupa123'
        }
        */
        var urlWithParameters = this.BASE_API_URL + requestParameters
        return new URL('aaa')
    }

    getThreats(queryOptions: QueryOptions) {

    }
}

export default ApiConnector