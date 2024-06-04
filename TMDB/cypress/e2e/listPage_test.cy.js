import HomePage from "../PageObjects/HomePage"
import Lists from "../PageObjects/ListsPage"
import Login from "../PageObjects/LoginPage"

const ln = new HomePage()
const ln1 = new Lists ()
const ln2 = new Login()

describe('Test list page', () => {
    beforeEach( () => {
        cy.fixture('TMDB_login_fixture').then( (data) => {
            ln.visithomepage()
            ln.clickloginpagebutton()
            ln2.setUsername(data.username)
            ln2.setPassword(data.password)
            ln2.clickLoginButton()
        })
       
        })

    afterEach( function() {
        if (this.currentTest.title != 'should navigate to the login page when the login button is clicked')
            {
            ln2.logout()
            ln2.verifyLogoutMessage()
        
            }
            })

    it('User should be able to create a list with name containg letters, numbers and special characters ', ()=>
    {
        cy.fixture('TMDB_list_fixture').then( (data) => {
            ln1.clickListButton()
            ln1.clickCreateListButton()
            ln1.insertListName(data.list_name)
            ln1.insertDescription(data.description)
            ln1.chooseAnswerPublicListDropdown()
            ln1.chooseAnswerShowCommentsDropdown()
            ln1.chooseSortByOriginalAscending()
            ln1.clickContinueButton()

        })
    })

})