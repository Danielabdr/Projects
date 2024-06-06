import HomePage from "../PageObjects/PageActions/HomePage"
import Search from "../PageObjects/PageActions/SearchPage"

const ln = new Search()
const ln1 = new HomePage()
describe('Test Search Page', () =>
{
    it('User should be able to search a movie', () => {
        cy.fixture('TMDB_search_fixture').then( (data) => {
            ln1.visithomepage()
            ln.searchMovie(data.movie_title)
            ln.clickSearchButton()
            ln.verifyMovieInList(data.movie_title)
        })
        
    })
})