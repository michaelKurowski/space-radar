import DatesParser from '../apiConnection/datesParser.class'
import 'jasmine'
import moment from 'moment'
const MILISECONDS_IN_ONE_MINUTE = 60000
const MILISECONDS_IN_ONE_HOUR = MILISECONDS_IN_ONE_MINUTE * 60
const MILISECONDS_IN_ONE_DAY = MILISECONDS_IN_ONE_HOUR * 24 
const UNIX_TIME_BEGINNING = 0
describe('Dates parser class', () => {
    describe('parseTimeSigma', () => {
        it('returns timestamp 0 if sigma is too small', () => {
            //given
            const SIGMA = '< 00:01'

            //when
            const result = DatesParser.parseTimeSigma(SIGMA)

            //then
            const isZeroTime = result.isSame(moment(UNIX_TIME_BEGINNING))
            expect(isZeroTime).toBe(true)
        })

        it('returns day 1 if sigma is equal to one day', () => {
            //given
            const SIGMA = '1_00:00'
            const expectedResult = moment(MILISECONDS_IN_ONE_DAY)

            //when
            const result = DatesParser.parseTimeSigma(SIGMA)

            //then
            const isOneDay = result.isSame(expectedResult)
            expect(isOneDay).toBe(true)
        })

        it('returns day 1, 1 hour, and 1 minute if sigma is equal to that date', () => {
            //given
            const SIGMA = '1_01:01'
            const expectedResult = moment(MILISECONDS_IN_ONE_DAY + MILISECONDS_IN_ONE_HOUR + MILISECONDS_IN_ONE_MINUTE)

            //when
            const result = DatesParser.parseTimeSigma(SIGMA)

            //then
            const isResultAsExpected = result.isSame(expectedResult)
            expect(isResultAsExpected).toBe(true)
        })

        it('returns 1 hour if sigma is equal to one hour', () => {
            //given
            const SIGMA = '01:00'
            const expectedResult = moment(MILISECONDS_IN_ONE_HOUR)

            //when
            const result = DatesParser.parseTimeSigma(SIGMA)

            //then
            const isOneHour = result.isSame(expectedResult)
            expect(isOneHour).toBe(true)
        })

        it('returns 10 hours if sigma is equal to ten hours', () => {
            //given
            const SIGMA = '10:00'
            const expectedResult = moment(MILISECONDS_IN_ONE_HOUR * 10)

            //when
            const result = DatesParser.parseTimeSigma(SIGMA)

            //then
            const isTenHours = result.isSame(expectedResult)
            expect(isTenHours).toBe(true)
        })

        it('returns 10 minutes if sigma is equal to ten minutes', () => {
            //given
            const SIGMA = '00:10'
            const expectedResult = moment(MILISECONDS_IN_ONE_MINUTE * 10)

            //when
            const result = DatesParser.parseTimeSigma(SIGMA)

            //then
            const isTenMinutes = result.isSame(expectedResult)
            expect(isTenMinutes).toBe(true)
        })

        it('returns 1 minute if sigma is equal to one minute', () => {
            //given
            const SIGMA = '00:01'
            const expectedResult = moment(MILISECONDS_IN_ONE_MINUTE)

            //when
            const result = DatesParser.parseTimeSigma(SIGMA)

            //then
            const isOneMinute = result.isSame(expectedResult)
            expect(isOneMinute).toBe(true)
        })
    })
})