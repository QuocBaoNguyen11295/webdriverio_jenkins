describe('Add new payee',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Add new payee - pay bills',async()=>{
        await browser.login_user(`${process.env.account_username}`,`${process.env.account_password}`)
        await browser.open_tab('Online Banking')
        await browser.check_open_online_banking_successfully()
        await browser.open_online_banking_service('Pay Bills')
        await browser.open_tab_payee('Add New Payee')
        await browser.open_service_successfully('Who are you paying?')
        await browser.fill_out_add_new_payee('Quoc Bao Nguyen','Test Bao','123/33 Le Van Sy street','Test')
        await browser.click_add_button_for_add_new_payee()
        await browser.check_add_new_payee_successfully('Quoc Bao Nguyen')
    })
})