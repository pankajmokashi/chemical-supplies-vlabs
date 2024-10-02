# Chemical Supplies
This project is a Chemical Supplies Table built using HTML, CSS, and plain JavaScript. The application allows users to view, sort, add, edit, and delete chemical records with various details like chemical name, vendor, density, viscosity, packaging, pack size, unit, and quantity.

Additionally, the project can be accessed on both desktop and mobile devices.

## Links: 
- Solution URL: https://github.com/pankajmokashi/chemical-supplies-vlabs
- Live Site URL: https://pankajmokashi.github.io/chemical-supplies-vlabs/

## Design approach
- Table Design: A tabular view was chosen to present the data in a structured format. Tables are easy to scan and allow users to sort and edit information efficiently.
- Toolbar for Actions: The most important actions (add, delete, move row, refresh, save) are placed in a toolbar for quick access.
- Viewport-based breakpoints: Different breakpoints are used to adjust the table’s font size and layout on smaller screens, making the app accessible on mobile devices.

## Functionality
- LocalStorage API: LocalStorage is used to store table data locally in the browser.
- sortTable(headerName):  Click on any column header to sort the table data in ascending or descending order.
- updateData(id, headername, value):  Rows can be edited using an inline editing(Clicking on a table cell allows for direct in-place editing).
- selectRow(checkbox)/selectAllRows(selectAllCheckbox):  Select individual or all rows of table.

### Toolbox:
- addRow():  Insert a new chemical entry to table.
- moveRowDown()/moverRowUp():  Move a row up or down within the table.
- deleteRows():  Remove selected rows.
- refreshData():  Refresh data and discard unsaved changes.
- saveData():  Save the current changes to table data.


## Installation and Setup
1. Clone the repository:
```
git clone https://github.com/pankajmokashi/chemical-supplies-vlabs.git
```
2. Navigate to the project directory:
```
cd chemical-supplies-vlabs
```
3. Open the project in your browser by opening the index.html
