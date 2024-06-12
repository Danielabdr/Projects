import selectors from "../PageElements/search_elements";
import search_selectors from "../PageElements/search_results_elements";

class Search {
    searchMovie(movie_title) {
        cy.get(selectors.txtSearchInput).type(movie_title);
    }

    clickSearchButton() {
        cy.get(selectors.txtSearchButton).click();
    }

    verifyMovieInList(movie_title) {
        cy.get(selectors.txtListOfMovies).contains(movie_title).should('exist');
    }

    FilterByTvShows()
    {
        cy.get(search_selectors.txtFilterByTvShows).click()
    }
    FilterByMovies()
    {
        cy.get(search_selectors.txtFilterByMovies).click()
    }
    FilterByPeople()
    {
        cy.get(search_selectors.txtFilterByPeople).click()
    }
    FilterByCollections()
    {
        cy.get(search_selectors.FilterByCollections).click()
    }
    FilterByKeywords()
    {
        cy.get(search_selectors.FilterByKeywords).click()
    }
    FilterByComapnies()
    {
        cy.get(search_selectors.FilterByComapnies).click()
    }
    FilterByNetworks()
    {
        cy.get(search_selectors.txtFilterByNetworks).click()
    }

 
 
}

export default Search;
