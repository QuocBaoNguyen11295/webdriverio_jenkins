describe('Show transaction',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Fill out information to show transaction',async()=>{
        await browser.login_user('username','password')
        await browser.open_tab('Online Banking')
        await browser.check_open_online_banking_successfully()
        await browser.open_online_banking_service('Account Activity')
        await browser.open_tab_account_activity('Show Transactions')
        await browser.fill_out_information_for_show_transaction('Loan')
        var list_item = [['2012-09-05','RENT','',770],['2012-09-01','RENT','',2000]]
        for(var i = 0;i < list_item.length;i++){
            await browser.check_the_table_show_transaction(i,list_item[i][0],list_item[i][1],list_item[i][2],list_item[i][3])
        }
    })
})