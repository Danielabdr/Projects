import Lists from '../PageObjects/PageActions/AccountListsPage';
import { setupBeforeEach, setupAfterEach } from '../support/hooks';

const ln1 = new Lists();

describe("Test account's list page - Create list", () => {
    setupBeforeEach();
    setupAfterEach();

    it('should be able to create a list with name containing letters, numbers, and special characters', () => {
        cy.fixture('TMDB_list_fixture').then((data) => {
            ln1.clickListButton();
            ln1.clickCreateListButton();
            ln1.insertListName(data.list_name);
            ln1.insertDescription(data.description);
            ln1.chooseAnswerPublicListDropdown();
            ln1.chooseAnswerShowCommentsDropdown();
            ln1.chooseSortByOriginalAscending();
            ln1.clickContinueButton();
        });
    });
});
