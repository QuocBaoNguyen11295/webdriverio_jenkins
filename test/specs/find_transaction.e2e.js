describe('Find Transaction',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Find transaction with information',async()=>{
        await browser.login_user(`${process.env.account_username}`,`${process.env.account_password}`)
        await browser.open_tab('Online Banking')
        await browser.check_open_online_banking_successfully()
        await browser.open_online_banking_service('Account Activity')
        await browser.open_tab_account_activity('Find Transactions')
        await browser.fill_out_information_for_finding_transaction('Find Transactions','ONLINE TRANSFER REF #UKKSDRQG6L',900,1000,`Deposit`)
        await browser.select_from_date_for_finding_transaction(01,"September 2012")
        await browser.select_to_date_for_finding_transaction(30,"September 2021")
        await browser.click_button_find()
        var list_item = [['2012-09-06','ONLINE TRANSFER REF #UKKSDRQG6L',984.3,''],['2012-09-01','ONLINE TRANSFER REF #UKKSDRQG6L',1000,'']]
        for(var i = 0;i < list_item.length;i++){
            await browser.check_the_table(i,list_item[i][0],list_item[i][1],list_item[i][2],list_item[i][3])
        }
    })
})