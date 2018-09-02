import moment from 'moment'

const DAYS_DELIMITER = '_'
const TIME_DELIMITER = ':'
const DELTA_SMALLER_THAN_EPSILON_SIGN = '<'
const UNIX_ZERO_TIME = 0
const DAYS_INDEX = 0
class DatesParser {
    static parseTimeSigma(sigma: string) {
        if (DatesParser.isSigmaNeglectible(sigma)) return moment(UNIX_ZERO_TIME)
        const daysAmount = DatesParser.howManyDaysInSigma(sigma)
        const hours = DatesParser.getHoursFromSigma(sigma)
        const minutes = DatesParser.getMinutesFromSigma(sigma)
        return moment(UNIX_ZERO_TIME).add(daysAmount, 'days').add(hours, 'hours').add(minutes, 'minutes')
    }

    static parseApproachDate(date: string) {
        return moment.utc(date)
    }

    private static isSigmaNeglectible(sigma: string) {
        return sigma[0] === DELTA_SMALLER_THAN_EPSILON_SIGN
    }

    private static howManyDaysInSigma(sigma: string) {
        const parsedWithDays = sigma.split(DAYS_DELIMITER)
        if (DatesParser.doesSigmaContainDaysData(parsedWithDays)) return parseInt(parsedWithDays[DAYS_INDEX])
        return 0
    }

    private static getSigmaTimeString(sigma: string) {
        const parsedWithDays = sigma.split(DAYS_DELIMITER)
        if (DatesParser.doesSigmaContainDaysData(parsedWithDays))
            return parsedWithDays[1]
        return parsedWithDays[0]
    }

    private static getHoursFromSigma(sigma: string) {
        const HOUR_INDEX = 0
        const sigmaTimeString = DatesParser.getSigmaTimeString(sigma)
        const hourString = sigmaTimeString.split(TIME_DELIMITER)[HOUR_INDEX]
        return parseInt(hourString)
    }

    private static getMinutesFromSigma(sigma: string) {
        const MINUTES_INDEX = 1
        const sigmaTimeString = DatesParser.getSigmaTimeString(sigma)
        const minutesString = sigmaTimeString.split(TIME_DELIMITER)[MINUTES_INDEX]
        return parseInt(minutesString)
    }

    private static doesSigmaContainDaysData(sigmaSplittedByDaysDelimitter: string[]) {
        return sigmaSplittedByDaysDelimitter.length === 2
    }
}

export default DatesParser