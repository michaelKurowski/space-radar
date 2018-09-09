
import QueryOptions from './queryOptions.interface'
import QueryOptionsToParametersMap from './QueryOptionsToParameters.map'
import {map, zip ,forOwn, forEach} from 'lodash'
import Parameter from './Parameter.class'
import ResponseParameters from './responseParameters.interface'
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

    private async fetchResponse(parameters: String) {
        const buildedUrl = this.BASE_API_URL + '?' + parameters + this.QUERY_SEPARATOR +this.serializedPresetParameters
        const responseArray = await fetch(buildedUrl)
        return await responseArray.json()
    }

    private parseResponse(response:{[key:string]: any}): ResponseParameters[]{
        const fields: (keyof ResponseParameters)[] = response['fields'] as (keyof ResponseParameters)[]
        let responseParameters: ResponseParameters[] = []

        const zippedValuesToFields = map(response['data'], dataObject => zip<keyof ResponseParameters, String>(fields, dataObject))
        
        forEach(zippedValuesToFields, data => {
            let parsedParameters:ResponseParameters = {}
            data.forEach(fieldData => {
                const fieldName = fieldData[0] as keyof ResponseParameters
                const fieldValue = fieldData[1]
                parsedParameters[fieldName] = fieldValue
                
            })
            responseParameters.push(parsedParameters)
        })

        return responseParameters
    }

     async getResponse(queryOptions: QueryOptions): Promise<ResponseParameters []> {
         const convertedParameters = this.convertParameters(queryOptions)
         const serializedParameters = this.serializeParameters(convertedParameters)

         const response = await this.fetchResponse(serializedParameters)
         const responseParameters = this.parseResponse(response)
         return responseParameters
    }
}

export default ApiConnector