class Login

{ 
    txtUsername = "#username"
    txtPassword = "#password"
    txtLoginButton = "#login_button"
    txtVerifyLogin = "div[class='content_wrapper flex'] h2 a"

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
}
export default Login;
