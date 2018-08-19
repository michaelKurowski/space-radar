import RequestParameters from './requestParameters.interface'
import QueryOptions from './queryOptions.interface'
import './QueryOptionsToParameters.map'
import QueryOptionsToParametersMap from './QueryOptionsToParameters.map'
import {forOwn} from 'lodash'
class ApiConnector {

    private BASE_API_URL = 'https://ssd-api.jpl.nasa.gov/cad.api'
    private optionsToParamsMap: Map<String, String>
   
    constructor(){ 
        this.optionsToParamsMap = QueryOptionsToParametersMap
    }

    private constructRequestURL(requestParameters: RequestParameters): URL {
        var urlWithParameters = this.BASE_API_URL + requestParameters
        return new URL('aaa')
    }

    private serializeParametersFromQueryOptions(queryOptions: QueryOptions): String {
        let serializedParameters:String = ''

        console.log(this.optionsToParamsMap)
        forOwn(queryOptions, (value, key) => {
            
        })

        console.log(serializedParameters)
        return serializedParameters
    }

    getThreats(queryOptions: QueryOptions) {
         this.serializeParametersFromQueryOptions(queryOptions)
    }
}

export default ApiConnector