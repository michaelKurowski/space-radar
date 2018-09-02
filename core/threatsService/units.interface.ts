const AU = Symbol('Astronomical Units')
const PARSECS = Symbol('Parsecs')

type astronomicalUnits = number & {[AU]: any}
type parsecs = number & {[PARSECS]: any}

export {astronomicalUnits, parsecs}