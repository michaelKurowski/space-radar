import * as units from './units.interface'
class PhysicsUtils {
    static calculateApparentMagnitude(absoluteMagnitude: number, distance: units.parsecs) {
        const logPart = Math.log(distance) / Math.LN10
        return absoluteMagnitude - 5 * (1 - logPart)
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
}

export default PhysicsUtils