
describe('Filtering threats', () => {
    it('contains threats forecast title', function() {
        browser.get('http://localhost:8080');
        const titleText = element(by.css('[data-selenium="threats-forecast-title"]')).getText();
    
        expect(titleText).toEqual('Threats forecast');
    });


    it('should refresh threats upon changing threats criteria', function() {
        browser.get('http://localhost:8080');

        const initialRowsCount = element.all(by.css('[data-selenium="threats-viewer-list"] > tr'))
            .count()
        element(by.css('[data-selenium="options-setter-danger-level"] option:nth-child(2)'))
            .click()
    
        element(by.css('[data-selenium="options-setter-days-to-hit"]'))
            .sendKeys('20')

        element(by.css('[data-selenium="options-setter-submit"]'))
            .click()
        const rowsCount = element.all(by.css('[data-selenium="threats-viewer-list"] > tr'))
            .count()
                       
        expect(rowsCount).not.toEqual(initialRowsCount);
    });
})