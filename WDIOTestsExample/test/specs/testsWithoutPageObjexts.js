describe('WDIO site', () => {
    it('should seach via page', async () => {
        await browser.url('https://webdriver.io/')
        await $('#__docusaurus   .DocSearch-Button-Container').click();
        await $('[class="DocSearch-Input"]').waitForDisplayed();
        await $('[class="DocSearch-Input"]').addValue('wdio');
        await $('[class="DocSearch-Input"]').waitForClickable();
        await $('[class="DocSearch-Input"]').click();
        await browser.keys(['Enter']);
        await $('[class="theme-doc-markdown markdown"]').waitForDisplayed();
        await expect(await $('#__docusaurus .theme-doc-markdown').getText()).toContain('WDIO')
    })
    it('should show code bars', async () => {
        await browser.url('https://webdriver.io/')
        await $('#__docusaurus .navbar__item').click();
        await $('[class="codeBlockLines_e6Vv"]').waitForDisplayed();
        await expect(await $('#__docusaurus .codeBlockLines_e6Vv').getText()).toContain('wdio')
    })
    it('should open other links', async () => {
        await browser.url('https://webdriver.io/');
        await $$('#__docusaurus .navbar__item')[4].click();
        await $('[class="docMainContainer_gTbr"]').waitForDisplayed();
        await $$('#__docusaurus .menu__link')[2].click();
        await $$('#__docusaurus .twitterProfile')[0].click();
        await expect(browser).toHaveUrlContaining('twitter')
    })

})
describe('Metaltis search', () => {

    beforeEach(async() => {
        await browser.url('https://www.metaltis.be/');
    })

    it('should login with valid credentials', async () => {
        await $('#ammenu-header-container #search').setValue('Blackstage');
        await browser.keys(['Enter']);
        await $(`[data-ui-id='page-title-wrapper']`).waitForDisplayed();
        await expect(await $(`[data-ui-id='page-title-wrapper']`).getText()).toContain('Blackstage')
    })

    it('should login with valid credentials', async () => {
        await $('#ammenu-header-container #search').setValue('Blackstage');
        await browser.keys(['Enter']);
        await $(`[data-ui-id='page-title-wrapper']`).waitForDisplayed();
        await $(`.sorter .select2-selection--single`).click();
        await $(`//li[text()="Prijs"]`).waitForClickable();
        await $(`//li[text()="Prijs"]`).click();
        await $(`//*[@id="select2-sorter-container" and text()="Prijs"]`).waitForDisplayed();

        const basePrices = await $$(`.price-excluding-tax`).map(async (element) => {
            const priceWithCurrency = await element.getText();
            return priceWithCurrency.slice(2);
        });
        console.log(basePrices);
        await $$(`.toolbar-sorter .action.sorter-action`)[0].click();
        await $$(`.action.sorter-action.sort-desc`)[0].waitForDisplayed();
        const basePricesAfterSorting = await $$(`.price-excluding-tax`).map(async (element) => {
            const priceWithCurrency = await element.getText();
            return priceWithCurrency.slice(2);
        });
        console.log(basePricesAfterSorting);

        await expect(basePrices).not.toEqual(basePricesAfterSorting)
    })
})