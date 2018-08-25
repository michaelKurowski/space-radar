import RequestParameters from "./requestParameters.interface";

export default class Parameter {

	constructor(public name: keyof RequestParameters, public value: RequestParameters[keyof RequestParameters]){}

	public toString(): String {
		if (this.name === undefined || this.value === undefined) return ''
		
		return `${this.name}=${this.value}`
	}

	public static Builder<K extends keyof RequestParameters>(name: K, value: RequestParameters[K]): Parameter {
		return new Parameter(name, value)
	}
}