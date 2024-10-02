# Chemical Supplies
This project is a Chemical Supplies Table built using HTML, CSS, and plain JavaScript. The application allows users to view, sort, add, edit, and delete chemical records with various details like chemical name, vendor, density, viscosity, packaging, pack size, unit, and quantity.

Additionally, the project is designed as a Progressive Web App (PWA) for cross-browser compatibility and can be accessed on both desktop and mobile devices.

## Live link: https://pankajmokashi.github.io/chemical-supplies-vlabs/

## Table Features
### Columns:
- Checkbox
- Index
- Chemical Name
- Vendor
- Density
- Viscosity
- Packaging
- Pack Size
- Unit
- Quantity

### Functionality
### Toolbox:
- addRow(): Insert a new chemical entry to table.
- moveRowDown()/moverRowUp(): Move a row up or down within the table.
- deleteRows(): Remove selected rows.
- refreshData(): Refresh data and discard unsaved changes.
- saveData(): Save the current changes to table data locally for persistence.

### Other:
- sortTable(headerName): Click on any column header to sort the table data in ascending or descending order.
- updateData(id, headername, value): Rows can be edited using an inline editing(Clicking on a table cell allows for direct in-place editing).
- selectRow(checkbox)/selectAllRows(selectAllCheckbox): Select individual or all rows of table.

## Installation and Setup
1. Clone the repository:
```
git clone https://github.com/your-username/chemical-inventory-management.git
```
2. Navigate to the project directory:
```
cd chemical-inventory-management
```
3. Open the project in your browser by opening the index.html
