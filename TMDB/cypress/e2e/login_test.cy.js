import Login from "../PageObjects/LoginPage"
import HomePage from "../PageObjects/HomePage"
import 'cypress-xpath'

const ln = new HomePage() 
const ln1 = new Login()
const ln2 = new Login()
//using POM with fixtures

describe('Test Login Page', () => {
  beforeEach( () => {
    ln.visithomepage()
    ln.clickloginpagebutton()
    })
    it('should navigate to the login page when the login button is clicked', () => {
      cy.url().should('include', 'login')
    })

  afterEach( function() {
    if (this.currentTest.title != 'should navigate to the login page when the login button is clicked')
      {
        ln2.logout()
        ln2.verifyLogoutMessage()

      }
    
  })

  it('Test Login', () => {
    /* cy.visit('https://www.themoviedb.org/login') */
    cy.fixture('TMDB_login_fixture').then((data) => {
      console.log(data)
      ln1.setUsername(data.username)
      ln1.setPassword(data.password)
      ln1.clickLoginButton()
      ln1.verifyLogin()
  
    })

  it('Login page negative testing', () =>
    {
    cy.fixture('TMDB_login_fixture').then( (data) => {
      ln2.setInvalidUsername(data.setInvalidUsername)
      ln2.setInvalidPassword(data.setInvalidPassword)
      ln2.clickLoginButton()
      cy.get(".error_message").should("be.visible")
  
    })

  })

   /*  const ln = new Login();
    ln.setUsername("Danielabdr");
    ln.setPassword("Tmdb1994@#@#");
    ln.clickLoginButton();
    ln.verifyLogin;
 */
  })
})