import HomePage from "../PageObjects/PageActions/HomePage"
import Search from "../PageObjects/PageActions/SearchPage"

const ln = new Search()
const ln1 = new HomePage()
describe('Test Search Page', () =>
{
    it('should be able to search a movie', () => {
        cy.fixture('TMDB_search_fixture').then( (data) => {
            ln1.visithomepage()
            ln.searchMovie(data.movie_title)
            ln.clickSearchButton()
            ln.verifyMovieInList(data.movie_title)
        })
    })

    it.only('should be able to filter movies by: TV shows, movies, people and networks', () => {
        cy.fixture('TMDB_search_fixture').then( (data) => {
            
            ln1.visithomepage()
            ln1.acceptCookiesButton()
            ln.searchMovie(data.movie_title)
            ln.clickSearchButton()
            ln.FilterByTvShows()
            ln.FilterByMovies()
            ln.FilterByPeople()
            ln.FilterByNetworks()
            
           
    })
})
    
})