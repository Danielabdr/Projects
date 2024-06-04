import 'cypress-xpath'
class Login

{ 
    txtUsername = "#username"
    txtPassword = "#password"
    txtLoginButton = "#login_button"
    txtVerifyLogin = "div[class='content_wrapper flex'] h2 a"
    txtLoginErrorMessage= "body > div:nth-child(2) > main:nth-child(2) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > a:nth-child(1) > h2:nth-child(1) > span:nth-child(1)"
    txtLogoutButton= 'div[class="k-animation-container"] div:nth-child(4) p:nth-child(1) a:nth-child(1)'
    txtUserLogoutButton= 'body > div.page_wrap.list_wrap > header > div.content > div > div.flex > ul > li.user > a'
    txtLoggedoutMessage= "#main > section.flash > div > div > div > h2"

    setUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickLoginButton()
    {
        cy.get(this.txtLoginButton).click();
    }

    verifyLogin()
    {
        cy.get(this.txtVerifyLogin);
    }

    setInvalidUsername(invalid_username)
    {
        cy.get(this.txtUsername).type(invalid_username)
    }

    setInvalidPassword(invalid_password)
    {
        cy.get(this.txtPassword).type(invalid_password)
    }

    verifyErrorMessage(error_message)
    {
        cy.get(this.txtLoginErrorMessage).should('be.visible').and('contain', error_message)
    }
    
    clickLogoutUserButton()
    {
        cy.get(this.txtUserLogoutButton).click();
    }

    clickLogoutButton()
    {
        cy.get(this.txtLogoutButton).click({force: true})
    }

    logout()
    {
        this.clickLogoutUserButton()
        cy.wait(500)
        this.clickLogoutButton()
    }

    verifyLogoutMessage()
    {
        cy.get(this.txtLoggedoutMessage).should('contain', "Logged Out!")
    }

    verifyFailedLogin(error_message)
    {
        cy.get(this.txtLoginErrorMessage).should('be.visible').and('contain', error_message)
    }
}
export default Login;
