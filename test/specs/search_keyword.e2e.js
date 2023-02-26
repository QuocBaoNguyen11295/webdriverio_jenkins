describe('Search keyword',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Find the articles based on the keyword',async()=>{
        await browser.find_the_articles_based_on_the_keyword('bank')
        await browser.check_the_results_after_finding_keyword('bank')
    })
})