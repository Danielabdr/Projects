

class Lists
  
{
    txtListButton = "#new_shortcut_bar > :nth-child(3) > .k-link"
    txtCreateListButton = "#main > div.account_page_data > div > div > div > div.title_header > a"
    txtListNameInput = "#name"
    txtListDescriptionInput = "#description"
    txtPublicListDropdown = "#public_label > span.k-widget.k-dropdown"
    txtPublicListNoAnswer = "#public_listbox > :nth-child(2)"
    txtShowCommentsDropdown = "#list_info > fieldset > label:nth-child(6) > span.k-widget.k-dropdown > span"
    txtShowCommentsNoAnswer = "#comments_listbox > :nth-child(2)"
    txtSortByDropdown = "#sort_by_label > span.k-widget.k-dropdown > span"
    txtSortByOriginalAscending = "#sort_by_label > span.k-widget.k-dropdown > span > :nth-child(1)"
    txtContinueButton = "#step_1_submit"


    clickListButton()
    {
        cy.get(this.txtListButton).click({force : true})
    }
    
    clickCreateListButton()
    {
        cy.get(this.txtCreateListButton).click({force:true})
    }

    insertListName(list_name)
    {
        cy.get(this.txtListNameInput).type(list_name)
    }

    insertDescription(description)
    {
        cy.get(this.txtListDescriptionInput).type(description)
    }

    chooseAnswerPublicListDropdown()
    {
        cy.get(this.txtPublicListDropdown).click({force:true})
        cy.get(this.txtPublicListNoAnswer).click({force:true})
    }

    chooseAnswerShowCommentsDropdown()
    {
        cy.get(this.txtShowCommentsDropdown).click()
        cy.get(this.txtShowCommentsNoAnswer).click({force:true})
    }

    chooseSortByOriginalAscending()
    {
        cy.get(this.txtSortByDropdown).click()
        cy.get(this.txtSortByOriginalAscending).click()
    }

    clickContinueButton()
    {
        cy.get(this.txtContinueButton).click()
    }


}
export default Lists