describe('Pay Saved Payee',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Pay saved payee - pay bills',async()=>{
        await browser.login_user(`${process.env.account_username}`,`${process.env.account_password}`)
        await browser.open_tab('Online Banking')
        await browser.check_open_online_banking_successfully()
        await browser.open_online_banking_service('Pay Bills')
        await browser.open_pay_saved_payee()
        await browser.open_service_successfully('Make payments to your saved payees')
        await browser.fill_out_the_pay_saved_payee('Apple','Checking',10000,12,"July 2021","Test")
        await browser.click_pay_button()
        await browser.show_message_successfully()
    })
})