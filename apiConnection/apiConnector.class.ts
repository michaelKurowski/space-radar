import RequestParameters from './requestParameters.interface'
import QueryOptions from './queryOptions.interface'

class ApiConnector {

    private BASE_API_URL = 'https://ssd-api.jpl.nasa.gov/cad.api'
    private optionsToParamsMap: Map<String, String>
   
    constructor(){ 
        this.optionsToParamsMap = new Map<String, String>()
    }

    private constructRequestURL(requestParameters: RequestParameters): URL {
        var urlWithParameters = this.BASE_API_URL + requestParameters
        return new URL('aaa')
    }

    private generateParametersFromQueryOptions(queryOptions: QueryOptions) {
        
    }

    getThreats(queryOptions: QueryOptions) {

    }
}

export default ApiConnector