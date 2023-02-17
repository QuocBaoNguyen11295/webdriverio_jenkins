describe('Exchange Foreign Currency',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Purchase foreign currency cash - Pay Bills',async()=>{
        await browser.login_user(`${process.env.account_username}`,`${process.env.account_password}`)
        await browser.open_tab('Online Banking')
        await browser.check_open_online_banking_successfully()
        await browser.open_online_banking_service('Pay Bills')
        await browser.open_tab_payee('Purchase Foreign Currency')
        await browser.open_service_successfully('Purchase foreign currency cash')
        await browser.fill_out_purchase_foreign_currency('Denmark (krone)','1 krone (DKK) = 0.1863 U.S. dollar (USD)',1000,'Selected currency','1000.00 krone (DKK) = 186.30 U.S. dollar (USD)')
        await browser.click_button_purchase()
        await browser.check_purchase_successfully()
    })
})