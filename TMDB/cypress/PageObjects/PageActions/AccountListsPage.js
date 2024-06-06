import selectors from "../PageElements/list_elements";

class Lists
{
    clickListButton() {
        cy.get(selectors.txtListButton).click({ force: true });
    }
    
    clickCreateListButton() {
        cy.get(selectors.txtCreateListButton).click({ force: true });
    }

    insertListName(list_name) {
        cy.get(selectors.txtListNameInput).type(list_name);
    }

    insertDescription(description) {
        cy.get(selectors.txtListDescriptionInput).type(description);
    }

    chooseAnswerPublicListDropdown() {
        cy.get(selectors.txtPublicListDropdown).click({ force: true });
        cy.get(selectors.txtPublicListNoAnswer).click({ force: true });
    }

    chooseAnswerShowCommentsDropdown() {
        cy.get(selectors.txtShowCommentsDropdown).click();
        cy.get(selectors.txtShowCommentsNoAnswer).click({ force: true });
    }

    chooseSortByOriginalAscending() {
        cy.get(selectors.txtSortByDropdown).click();
        cy.get(selectors.txtSortByOriginalAscending).click();
    }

    clickContinueButton() {
        cy.get(selectors.txtContinueButton).click();
    }
}

export default Lists;
