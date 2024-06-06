import HomePage from "../PageObjects/PageActions/HomePage";
import Login from "../PageObjects/PageActions/LoginPage";
import { setupBeforeEach, setupAfterEach } from "../support/hooks";

const ln = new HomePage();
const ln1 = new Login();

describe('Test Login Page', () => {
  setupBeforeEach();
  setupAfterEach();

  it('Test Login- Positive testing', () => {
    cy.fixture('TMDB_login_fixture').then((data) => {
  
      ln1.setUsername(data.username);
      ln1.setPassword(data.password);
      ln1.clickLoginButton();
      ln1.verifyLogin();
    });
  });

  it('Test Login- Negative testing', () => {
    cy.fixture('TMDB_login_fixture').then((data) => {
      ln1.setInvalidUsername(data.invalid_username);
      ln1.setInvalidPassword(data.invalid_password);
      ln1.clickLoginButton();
      ln1.verifyFailedLogin(data.error_message);
    });
  });
});
