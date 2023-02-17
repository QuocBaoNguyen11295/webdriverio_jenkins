const moment = require("moment");

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // of the configuration file being run.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        './test/specs/*.e2e.js'
    ],
    suites:{
        login:['./test/specs/login.e2e.js'],
        forgot_password:['./test/specs/forgot_password.e2e.js'],
        feedback:['./test/specs/feedback.e2e.js'],
        transfer_fund:['./test/specs/transfer_fund.e2e.js'],
        pay_saved_payee: ['./test/specs/pay_saved_payee.e2e.js'],
        add_new_payee: ['./test/specs/add_new_payee.e2e.js']
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [{
    
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': { 
            args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
       }
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['chromedriver'],
    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec',
        ['junit', {
            outputDir: './report',
            outputFileFormat: function(options){
                return `results-${new Date().getTime()}.xml`
            }
        }]
    ],


    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {Number} exitCode 0 - success, 1 - fail
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {Number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs) {
        browser.addCommand('load_page',async()=>{
            await browser.url('http://zero.webappsecurity.com/index.html')
            await browser.maximizeWindow()
        })
        browser.addCommand('click_signin',async(text_button)=>{
            const sign_in_button = await $(`button*=${text_button}`)
            await sign_in_button.waitForClickable({timeout:3000})
            await sign_in_button.click()
        })
        browser.addCommand('load_login_form',async()=>{
            const login_form = await $('#login_form')
            await login_form.waitForDisplayed({timeout:3000})
        })
        browser.addCommand('fill_username',async(username)=>{
            await $('#user_login').setValue(username)
        })

        browser.addCommand('fill_password',async(password)=>{
            await $('#user_password').setValue(password)
        })

        browser.addCommand('check_remember_me',async()=>{
            const checkbox = await $('#user_remember_me')
            await checkbox.waitForClickable({timeout:3000})
            await checkbox.click()
        })

        browser.addCommand('click_sign_in',async(label)=>{
            const sign_in_button = await $(`[value="${label}"]`)
            await sign_in_button.waitForClickable({timeout:3000})
            await sign_in_button.click()
        })

        browser.addCommand('check_login_successfully',async(username)=>{
            await browser.navigateTo('http://zero.webappsecurity.com/')
            const username_locator = await $('a=Logout').$('..').$('..').$('..').$(`a=${username}`)
            await username_locator.waitForDisplayed({timeout:3000})
        })

        browser.addCommand('check_login_unsuccessfully',async(error_message)=>{
            const error_message_locator = await $(`div*=${error_message}`)
            await expect(error_message_locator).toBeDisplayed({timeout:3000})
        })

        //------ login for all -------//
        browser.addCommand('login_user',async(username,password)=>{
            await browser.click_signin('Signin')
            await browser.load_login_form()
            await browser.fill_username(username)
            await browser.fill_password(password)
            await browser.check_remember_me()
            await browser.click_sign_in('Sign in')
            await browser.check_login_successfully(username)
        })
        //-----------------------------


        browser.addCommand('click_logout',async(username)=>{
            const username_locator = await $('a=Logout').$('..').$('..').$('..').$(`a=${username}`)
            const logout_button = await $('a=Logout')
            const sign_in_button = await $('button*=Signin')
            await username_locator.waitForClickable({timeout:5000})
            await username_locator.click()
            await logout_button.waitForClickable({timeout:5000})
            await logout_button.click()
            await sign_in_button.waitForClickable({timeout:5000})
        })

        //---- forgot password ----//
        browser.addCommand('click_forgot_password',async()=>{
            const forgot_password_link = await $('a=Forgot your password ?')
            await forgot_password_link.click()
        })

        browser.addCommand('check_forgot_password_page',async()=>{
            const header = await $('h3')
            const paragraph = await $('h3').$('..').$('..').$('..').$('p')
            await expect(header).toHaveTextContaining(`Forgotten Password`)
            await expect(paragraph).toHaveTextContaining(`So you forgot your password? Give us your email address and we will email it to you.`)
        })

        browser.addCommand('fill_out_email',async(email)=>{
            const input_email = await $('h3').$('..').$('..').$('..').$('p').$('..').$('label=Email').$('..').$('input')
            await input_email.setValue(email)
        })

        browser.addCommand('click_send_password',async()=>{
            const button_send_password = await $('[value="Send Password"]')
            await button_send_password.click()
        })

        browser.addCommand('check_send_password_successfully',async(email)=>{
            const header = await $('h3')
            const paragraph = await $('h3').$('..').$('..').$('..').$(`div*=Your password will be sent to the following email: ${email}`)
            await expect(header).toHaveTextContaining('Forgotten Password')
            await expect(paragraph).toBeDisplayed()
        })
        //---- open tab ----//
        browser.addCommand('open_tab',async(tabname)=>{
            const tab = await $(`div=${tabname}`)
            await tab.click()
        })

        browser.addCommand('open_feedback_tab_sucessfully',async()=>{
            const header = await $('h3')
            const paragraph_1 = await $('#faq-link').$('..').$('..').$('p')
            const paragraph_2 = await $('#faq-link').$('..').$('..').$('..').$('#description').nextElement()
            await expect(header).toHaveTextContaining('Feedback')
            await expect(paragraph_1).toHaveTextContaining(`Our Frequently Asked Questions area will help you with many of your inquiries.\nIf you can't find your question, return to this page and use the e-mail form below.`)
            await expect(paragraph_2).toHaveTextContaining(`IMPORTANT! This feedback facility is not secure. Please do not send any\naccount information in a message sent from here.`)
        })

        browser.addCommand('fill_feedback_form',async(user_name,email,title,message)=>{
            const user_name_field = await $(`[placeholder="Your Name"]`)
            const email_field = await $('[placeholder="Your email address"]')
            const title_field = await $('[placeholder="Subject"]')
            const message_field = await $('[placeholder="Type your questions here..."]')
            await user_name_field.setValue(user_name)
            await email_field.setValue(email)
            await title_field.setValue(title)
            await message_field.setValue(message)
        })

        browser.addCommand('click_send_feedback',async()=>{
            const button_send_feedback = await $('[value="Send Message"]')
            await button_send_feedback.waitForClickable()
            await button_send_feedback.click()
        })

        browser.addCommand('check_send_message_successfully',async(name)=>{
            const header = await $('h3')
            const paragraph = await $('h3').$('..').$('..').$('..').$('.page-header').parentElement()
            await expect(header).toHaveTextContaining('Feedback')
            await expect(paragraph).toHaveTextContaining(`Thank you for your comments, ${name}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`)
        })

        //---- Transfer fund ----//
        browser.addCommand('check_open_online_banking_successfully',async()=>{
            const header = await $('h1')
            const paragraph = await $('h1').parentElement().$('p')
            await expect(header).toHaveTextContaining('Online Banking')
            await expect(paragraph).toHaveTextContaining('Pay bills easily')
        })

        browser.addCommand('open_online_banking_service',async(service_name)=>{
            const service = await $(`span=${service_name}`)
            await service.waitForClickable()
            await service.click()
        })

        browser.addCommand('open_service_successfully',async(service_title)=>{
            const service_title_locator = await $(`h2=${service_title}`)
            await expect(service_title_locator).toBeDisplayed()
        })

        browser.addCommand('transfer_money',async(from_account,to_account,amount_money,description_transfer)=>{
            const from_account_locator = await $('label=From Account').parentElement().$('select').$(`option*=${from_account}`)
            const to_account_locator = await $('label=To Account').parentElement().$('select').$(`option*=${to_account}`)
            const amount = await $('label=Amount').parentElement().$('input')
            const description = await $('label=Description').parentElement().$('input')
            const button = await $('button=Continue')
            await from_account_locator.click()
            await to_account_locator.click()
            await amount.setValue(amount_money)
            await description.setValue(description_transfer)
            await button.waitForClickable()
            await button.click()
        })

        browser.addCommand('confirm_transfer',async(from_account,to_account,amount,description)=>{
            const header = await $('h2')
            const paragraph = await $('h2').$('..').$('..').$('p')
            const from_account_locator = await $('label=From Account').parentElement().$('input')
            const to_account_locator = await $('label=To Account').parentElement().$('input')
            const amount_locator = await $('label=Amount').parentElement().$('input')
            const description_locator = await $('label=Description').parentElement().$('input')
            await expect(from_account_locator).toHaveValueContaining(from_account)
            await expect(to_account_locator).toHaveValueContaining(to_account)
            await expect(header).toHaveTextContaining('Transfer Money & Make Payments - Verify')
            await expect(paragraph).toHaveTextContaining('Please verify that the following transaction is correct by selecting the Submit button below.')
            await expect(amount_locator).toHaveValueContaining(amount)
            await expect(description_locator).toHaveValueContaining(description)
        })

        browser.addCommand('click_submit_button',async()=>{
            const button = await $('button=Submit')
            await button.waitForClickable()
            await button.click()
        })

        browser.addCommand('check_transferring_transaction_successfully',async(from_account,to_account,amount)=>{
            const header = await $('h2')
            const message = await $('.alert-success')
            const from_account_locator = await $('strong=From Account').$('..').$('..').$('..').$(`div*=${from_account}`)
            const to_account_locator = await $('strong=To Account').$('..').$('..').$('..').$(`div*=${to_account}`)
            const amount_locator = await $('strong=Amount').$('..').$('..').$('..').$(`div*=$ ${amount}`)
            await header.waitForDisplayed()
            await message.waitForDisplayed()
            await expect(header).toHaveTextContaining('Transfer Money & Make Payments - Confirm')
            await expect(message).toHaveTextContaining('You successfully submitted your transaction.')
            await expect(from_account_locator).toBeDisplayed()
            await expect(to_account_locator).toBeDisplayed()
            await expect(amount_locator).toBeDisplayed()
        })

        browser.addCommand('select_date_add_new_payee',async(date, dateToSelect)=>{
            const input_date = await $('//input[@name="date"]')
            await input_date.click()
            const prev = await $('//span[text()="Prev"]')
            const next = await $('//span[text()="Next"]')
            const mm = await $('.ui-datepicker-title > .ui-datepicker-month')
            const yy = await $('.ui-datepicker-title > .ui-datepicker-year')
            let mmyy_text_content = await mm.getText() + " " + await yy.getText()
            //console.log(mmyy_text_content)
            const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
            console.log(thisMonth)
            
            while(mmyy_text_content != dateToSelect){
                if(thisMonth){
                    await prev.click()
                    mmyy_text_content = await mm.getText() + " " + await yy.getText()
                }else{
                    await next.click()
                    mmyy_text_content = await mm.getText() + " " + await yy.getText()
                }
            }
            const date_locator = await $(`//td//a[text()=${date}]`)
            await date_locator.click()
        })

        browser.addCommand('open_pay_saved_payee',async()=>{
            const pay_saved_payee = await $('a=Pay Saved Payee')
            await pay_saved_payee.click()
        })

        browser.addCommand('fill_out_the_pay_saved_payee',async(payee_bank,account_type,amount_money,date,month_year,description_payee)=>{
            const payee = await $('label=Payee').$('..').$('select').$(`option=${payee_bank}`)
            const account = await $('label=Account').$('..').$('select').$(`option=${account_type}`)
            const amount = await $('label=Amount').$('..').$('input')
            const description = await $('label=Description').$('..').$('input')
            await payee.click()
            await account.click()
            await amount.setValue(amount_money)
            await browser.select_date_add_new_payee(date,month_year)
            await description.setValue(description_payee)
        })

        browser.addCommand('click_pay_button',async()=>{
            const button = $('[value="Pay"]')
            await button.click()
        })

        browser.addCommand('show_message_successfully',async()=>{
            const message = $('#alert_content').$('span')
            await expect(message).toHaveTextContaining('The payment was successfully submitted.')
        })

        browser.addCommand('open_tab_payee',async(payee_tab)=>{
            const payee_tab_locator = await $(`a=${payee_tab}`)
            await payee_tab_locator.waitForClickable()
            await payee_tab_locator.click()
        })

        browser.addCommand('fill_out_add_new_payee',async(name,address,account,details)=>{
            const payee_name_locator = await $('h2=Who are you paying?').parentElement().$('label=Payee Name').parentElement().$('input')
            await payee_name_locator.waitForDisplayed()
            await payee_name_locator.setValue(name)
            const payee_address_locator = await $('h2=Who are you paying?').parentElement().$('label=Payee Address').parentElement().$('textarea')
            await payee_address_locator.waitForDisplayed()
            await payee_address_locator.setValue(address)
            const payee_account_locator = await $('h2=Who are you paying?').parentElement().$('label=Account').parentElement().$('input')
            await payee_account_locator.waitForDisplayed()
            await payee_account_locator.setValue(account)
            const payee_details_locator = await $('h2=Who are you paying?').parentElement().$('label=Payee Details').parentElement().$('input')
            await payee_details_locator.waitForDisplayed()
            await payee_details_locator.setValue(details)
        })

        browser.addCommand('click_add_button_for_add_new_payee',async()=>{
            const add_new_payee_button = await $('[value=Add]')
            await add_new_payee_button.waitForClickable()
            await add_new_payee_button.click()
        })

        browser.addCommand('check_add_new_payee_successfully',async(name)=>{
            const message = await $('#alert_content')
            await message.waitForDisplayed()
            await expect(message).toHaveTextContaining(`The new payee ${name} was successfully created.`)
        })
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
}
