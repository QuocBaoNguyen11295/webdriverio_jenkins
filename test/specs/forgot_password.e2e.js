describe('Forgot password',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Send email for forgot password',async()=>{
        await browser.click_signin('Signin')
        await browser.load_login_form()
        await browser.click_forgot_password()
        await browser.check_forgot_password_page()
        await browser.fill_out_email('baonguyen01121995@gmail.com')
        await browser.click_send_password()
        await browser.check_send_password_successfully('baonguyen01121995@gmail.com')
    })
})