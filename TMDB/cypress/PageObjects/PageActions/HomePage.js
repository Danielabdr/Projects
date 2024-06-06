class HomePage
{
    visithomepage(){
        cy.visit("https://www.themoviedb.org/")
    }

    clickloginpagebutton(){

        cy.get("body > div:nth-child(2) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click()
    }
}
export default HomePage