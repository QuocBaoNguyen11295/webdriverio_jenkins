describe('Login flow',()=>{
    beforeEach(async()=>{
        await browser.load_page()
    })

    it('Login successfully',async()=>{
        await browser.click_signin('Signin')
        await browser.load_login_form()
        await browser.fill_username(`${process.env.account_username}`)
        await browser.fill_password(`${process.env.account_password}`)
        await browser.check_remember_me()
        await browser.click_sign_in('Sign in')
        await browser.check_login_successfully(`${process.env.account_username}`)
        await browser.click_logout(`${process.env.account_username}`)
    })

    it('Login unsucessfully',async()=>{
        await browser.click_signin('Signin')
        await browser.load_login_form()
        await browser.fill_username('dsad')
        await browser.fill_password('dsadsa')
        await browser.click_sign_in('Sign in')
        await browser.check_login_unsuccessfully('Login and/or password are wrong.')
    })

    afterEach(async()=>{
        // session ended automatically
    })
})