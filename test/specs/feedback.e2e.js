describe('Feedback',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Open feedback and send feedback',async()=>{
        await browser.open_tab('Feedback')
        await browser.open_feedback_tab_sucessfully()
        await browser.fill_feedback_form('Quoc Bao Nguyen','baonguyen01121995@gmail.com',`Test message`,`Test 12312313`)
        await browser.click_send_feedback()
        await browser.check_send_message_successfully('Quoc Bao Nguyen')
    })

})