import * as units from './units.interface'
import Visibility from './visibility.enum'
class PhysicsUtils {
    static calculateApparentMagnitude(absoluteMagnitude: number, distance: units.parsecs) {
        const distanceBetweenObserverAndSun = 4.84813681 * 10 ** -6
        const objectFlux = absoluteMagnitude / (4 * Math.PI * distance ** 2)
        const vegaFlux = 37 / (4 * Math.PI * 25.3 ** 2)
        const logPart = Math.log10(objectFlux / vegaFlux)   
         //const logPart = Math.log10((3/2) * distance**2)
        //const logPart = Math.log10((distance **2 * distanceBetweenObserverAndSun **2) / (2/3) * distanceBetweenObserverAndSun ** 4)
        return - 2.5 * logPart
    }

    static convertAUtoParsecs(astronomicalUnits: units.astronomicalUnits) : units.parsecs {
        return (astronomicalUnits * 4.84813681 * 10 ** -6) as units.parsecs
    }

    static convertParsecsToAU(parsecs: units.parsecs) : units.astronomicalUnits {
        return (parsecs * 206264.806) as units.astronomicalUnits
    }

    static createParsecs(amount: number) : units.parsecs {
        return amount as units.parsecs
    }

    static createAU(amount: number) : units.astronomicalUnits {
        return amount as units.astronomicalUnits
    }

    static getVisibilityLevel(apparentMagnitude: number) {
        if (apparentMagnitude < 6.5) return Visibility.EYE
        if (apparentMagnitude < 10) return Visibility.BINOCULARS
        if (apparentMagnitude < 15) return Visibility.TELESCOPE
        return Visibility.HEAVY_APARATURE
    }
}

export default PhysicsUtils