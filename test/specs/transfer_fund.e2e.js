describe('Transfer fund',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Transfer money from account to another account',async()=>{
        await browser.login_user(`${process.env.account_username}`,`${process.env.account_password}`)
        await browser.open_tab('Online Banking')
        await browser.check_open_online_banking_successfully()
        await browser.open_online_banking_service('Transfer Funds')
        await browser.open_service_successfully('Transfer Money & Make Payments')
        await browser.transfer_money('Savings(Avail. balance = $ 1548)','Loan(Avail. balance = $ 780)',10000,"Test")
        await browser.confirm_transfer('Savings','Loan',"10000","Test")
        await browser.click_submit_button()
        await browser.check_transferring_transaction_successfully('Savings','Loan','10000')
    })
})