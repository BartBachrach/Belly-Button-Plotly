d3.selectAll("body").on("change", updatePage);
// this line uses the d3.selectAll() method to create an event listener
// whenever there is a change to the HTML body, the updatePage() function is called
// that is, when an event occurs on the page, such as a selection of a dropdown menu option,
// the updatePage() function is triggered

function updatePage() {
    let dropdownMenu = d3.selectAll("#selectOption").node();
    // it defines the dropdown menu with d3.selectAll and passes in the HTML id of the dropdown menu
    let dropdownMenuID = dropdownMenu.id;
    // the ID of the dropdown menu is assigned to the variable dropdownMenuID (dropdown menu was previously defined as "#selectOption" from it's HTML id)
    let selectedOption = dropdownMenu.value;
    // whenenver a dropdown option is selected, it's value is assigned the variabel "selectedOption". Note, selectOption is the id value of the dropdown menu
    // while selectEDOption is the option that is chosen by the user

    console.log(dropdownMenuID);
    console.log(selectedOption);
    // each time updatePage() is triggered, the "id" value of the dropdown menu, as well as the menu option
    // are printed to the console
};
