import selectors from "../PageElements/search_elements";

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
}

export default Search;
