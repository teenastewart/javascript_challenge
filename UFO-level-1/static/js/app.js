// from data.js
var tableData = data;

// YOUR CODE HERE!

//Get the table body element and store it as a varriable
var tbody = d3.select("tbody");

//Get the button element and store it as a variable
var filterButton = d3.select("button");

//Get the cell element and store it as a variable
var tableCell = d3.select("td");
//console.log(data);

//Create a table row for each row in the data set and add the values to table cells
data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


//Create the event listener for the button click
filterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //Clear current table data
    tbody.html("");
    //Confirm event listener is working
    console.log('button clicked');
    //Grab the date input field and input value and store as variables
    var inputElement = d3.select("input");
    var inputValue = inputElement.property("value");
    //Check the value in console
    console.log(inputValue);
    //Filter the data set by the input value
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
    //Check the filtered dataset in console
    console.log(filteredData);
    //Create a table row for each row in the filtered data set and add the values to table cells
    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


});

