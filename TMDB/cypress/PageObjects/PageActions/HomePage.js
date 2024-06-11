import home_selectors from "../PageElements/home_page_elements"

class HomePage
{
    visithomepage(){
        cy.visit("https://www.themoviedb.org/")
    }

    clickloginpagebutton(){

        cy.get(home_selectors.txtLoginPageButton).click()
    }
    acceptCookiesButton(){
        cy.get(home_selectors.txtAcceptCookiesButton).click()
    }
}
export default HomePage