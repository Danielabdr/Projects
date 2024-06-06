import HomePage from '../PageObjects/PageActions/HomePage';
import Login from '../PageObjects/PageActions/LoginPage';

const ln = new HomePage();
const ln2 = new Login();

export const setupBeforeEach = () => {
  beforeEach(() => {
    cy.fixture('TMDB_login_fixture').then((data) => {
      if (Cypress.currentTest.title !== "Test Login- Positive testing" && Cypress.currentTest.title !== "Test Login- Negative testing") {
        ln.visithomepage();
        ln.clickloginpagebutton();
        ln2.setUsername(data.username);
        ln2.setPassword(data.password);
        ln2.clickLoginButton();
      } else {
        ln.visithomepage();
        ln.clickloginpagebutton();
      }
    });
  });
};

export const setupAfterEach = () => {
  afterEach(function () {
    if (this.currentTest.title != 'should navigate to the login page when the login button is clicked' & 'Test Login- Negative testing') {
      ln2.logout();
      ln2.verifyLogoutMessage();
    }
  });
};
