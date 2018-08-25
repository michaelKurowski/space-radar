import DatesParser from '../apiConnection/datesParser.class'
import 'jasmine'
import moment from 'moment'

const UNIX_TIME_BEGINNING = 0
describe('Dates parser class', () => {
    describe('parseTimeSigma', () => {
        it('returns timestamp 0 if sigma is too small', () => {
            const SIGMA = '< 00:01'
            const result = DatesParser.parseTimeSigma(SIGMA)

            const isZeroTime = result.isSame(moment(UNIX_TIME_BEGINNING))
            expect(isZeroTime).toBe(true)
        })
    })
})