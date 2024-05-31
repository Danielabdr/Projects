import Login from "../PageObjects/LoginPage"
import HomePage from "../PageObjects/HomePage"

const ln = new HomePage() 
//using POM with fixtures

describe('Test Login Page', () => {
  beforeEach( () => {
    ln.visithomepage()
    ln.clickloginbutton()
    })
    it('Test', () => {
      cy.url().should('include', 'login')
    })

  it('Test Login', () => {
    /* cy.visit('https://www.themoviedb.org/login') */
    cy.fixture('TMDB_login_fixture').then((data) => {
      console.log(data)
      const ln = new Login();
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.clickLoginButton();
      ln.verifyLogin();

    })

   /*  const ln = new Login();
    ln.setUsername("Danielabdr");
    ln.setPassword("Tmdb1994@#@#");
    ln.clickLoginButton();
    ln.verifyLogin;
 */
  })
})