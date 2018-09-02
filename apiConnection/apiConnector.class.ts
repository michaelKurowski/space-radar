
import QueryOptions from './queryOptions.interface'
import QueryOptionsToParametersMap from './QueryOptionsToParameters.map'
import {map, zip ,forOwn, forEach} from 'lodash'
import Parameter from './Parameter.class'
import ResponseParameters from './responseParameters.interface'
import RequestParameters from './requestParameters.interface';
class ApiConnector {

    private QUERY_SEPARATOR = '&'

    private BASE_API_URL = 'https://ssd-api.jpl.nasa.gov/cad.api'
    private serializedPresetParameters: String

    constructor() {
        const presetParameters: Parameter[] = [
            (Parameter.Builder('fullname', true))
        ]

        this.serializedPresetParameters = this.serializeParameters(presetParameters)
    }

    private convertParameters(queryOptions: QueryOptions): Parameter[] {
        let convertedParameters:Parameter[] = []

        forOwn(queryOptions, (value, key) => {
            const parameterName = QueryOptionsToParametersMap.get(key as keyof QueryOptions)!
            convertedParameters.push(Parameter.Builder(parameterName, value))
        })

        return convertedParameters
    }

    private serializeParameters(parameters: Parameter[]): String {
        const parsedParameters = map(parameters, (parameter) => parameter.toString())
        return parsedParameters.join(this.QUERY_SEPARATOR)
    }

    private sendRequest(parameters: String) {
        console.log(parameters)
        const buildedUrl = this.BASE_API_URL + '?' + parameters + this.QUERY_SEPARATOR +this.serializedPresetParameters
        console.log(buildedUrl)
        fetch(buildedUrl)
            .then(response => response.json())
            .then(console.log)
            .catch(err => console.log(`fetch error: ${err}`))
    }

    private parseResponse(response:{[key:string]: any}): ResponseParameters{
        const fields: (keyof ResponseParameters)[] = response['fields'] as (keyof ResponseParameters)[]
        let responseParameters: ResponseParameters = {}

        const zippedValuesToFields = map(response['data'], dataObject => zip<keyof ResponseParameters, String>(fields, dataObject))
        
        forEach(zippedValuesToFields, data => {
           console.log(data)
        })
        

        return responseParameters
    }

    async getThreats(queryOptions: QueryOptions) {
         const convertedParameters = this.convertParameters(queryOptions)
         const serializedParameters = this.serializeParameters(convertedParameters)

         const responseParameters = await this.sendRequest(serializedParameters)
         console.log(responseParameters)
    }
}

export default ApiConnector