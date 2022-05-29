d3.selectAll("body").on("change", updateChar);

function updateChar() {
    let dropdownMenu = d3.selectAll("#selectOption").node();
    // first we define the dropdown menu by using d3 to select it's ID, "#selectOption"
    // .node() is used for event-driven servers (and here, we're using an event listener)
    let selectedOption = dropdownMenu.value;
    // selectedOption is defined as the value of the dropdownMenu, in otherwords, the text in between the <select> tags

    console.log(selectedOption);
};