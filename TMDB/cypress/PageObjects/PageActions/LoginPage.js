import selectors from "../PageElements/login_elements";
class Login

{ 
    
    setUsername(username){
        cy.get(selectors.txtUsername).type(username);
    }

    setPassword(password)
    {
        cy.get(selectors.txtPassword).type(password);
    }

    clickLoginButton()
    {
        cy.get(selectors.txtLoginButton).click();
    }

    verifyLogin()
    {
        cy.get(selectors.txtVerifyLogin);
    }

    setInvalidUsername(invalid_username)
    {
        cy.get(selectors.txtUsername).type(invalid_username)
    }

    setInvalidPassword(invalid_password)
    {
        cy.get(selectors.txtPassword).type(invalid_password)
    }

    verifyErrorMessage(error_message)
    {
        cy.get(selectors.txtLoginErrorMessage).should('be.visible').and('contain', error_message)
    }
    
    clickLogoutUserButton()
    {
        cy.get(selectors.txtUserLogoutButton).click();
    }

    clickLogoutButton()
    {
        cy.get(selectors.txtLogoutButton).click({force: true})
    }

    logout()
    {
        this.clickLogoutUserButton()
        cy.wait(500)
        this.clickLogoutButton()
    }

    verifyLogoutMessage()
    {
        cy.get(selectors.txtLoggedoutMessage).should('contain', "Logged Out!")
    }

    verifyFailedLogin(error_message)
    {
        cy.get(selectors.txtLoginErrorMessage).should('be.visible').and('contain', error_message)
    }
}
export default Login;
