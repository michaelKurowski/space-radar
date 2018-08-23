import RequestParameters from './requestParameters.interface'
import QueryOptions from './queryOptions.interface'
import './QueryOptionsToParameters.map'
import QueryOptionsToParametersMap from './QueryOptionsToParameters.map'
import {forOwn} from 'lodash'
class ApiConnector {

    private BASE_API_URL = 'https://ssd-api.jpl.nasa.gov/cad.api'
    private parametersToQuery: RequestParameters = {}
    private presetParameters: RequestParameters = {
        fullname: true
    }

    constructor(){
        this.parametersToQuery = Object.assign(this.parametersToQuery, this.presetParameters)
    }

    private constructRequestURL(requestParameters: RequestParameters): URL {
        var urlWithParameters = this.BASE_API_URL + requestParameters
        return new URL('aaa')
    }

    private convertParameters(queryOptions: QueryOptions): RequestParameters {
        let convertedParameters:RequestParameters = {}

        forOwn(queryOptions, (value, key) => {

            const parameterName = QueryOptionsToParametersMap.get(key as keyof QueryOptions)!

            const parameter: RequestParameters = {
                [parameterName]: value
            }
            
            convertedParameters = Object.assign(convertedParameters, parameter)
        })

        return convertedParameters
    }

    private sendRequest(parameters: string){
    }

    getThreats(queryOptions: QueryOptions) {
         this.convertParameters(queryOptions)
    }
}

export default ApiConnector