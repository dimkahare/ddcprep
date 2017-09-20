import {
    parseSvg
} from './ddcCore';

describe('Check "ddcCore"', function () {
    describe('Check "parseSvg" method', function () {
        test('Method "parseSvg" should be a function', function () {
            expect(typeof parseSvg).toBe('function');
        });
    });
});
