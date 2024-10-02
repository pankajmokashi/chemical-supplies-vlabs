let initialData = [
  {
    id: 1,
    supplies: {
      "Chemical Name": "Sodium Chloride",
      Vendor: "ChemCo Ltd.",
      Density: 2160,
      Viscosity: 0.001002,
      Packaging: "Bag",
      "Pack Size": 25,
      Unit: "kg",
      Quantity: 100,
    },
  },
  {
    id: 2,
    supplies: {
      "Chemical Name": "Sulfuric Acid",
      Vendor: "Acid Solutions",
      Density: 1840,
      Viscosity: 0.00099,
      Packaging: "Drum",
      "Pack Size": 200,
      Unit: "L",
      Quantity: 50,
    },
  },
  {
    id: 3,
    supplies: {
      "Chemical Name": "Ethanol",
      Vendor: "BioChemicals Inc.",
      Density: 789,
      Viscosity: 0.001074,
      Packaging: "Barrel",
      "Pack Size": 100,
      Unit: "L",
      Quantity: 300,
    },
  },
  {
    id: 4,
    supplies: {
      "Chemical Name": "Acetone",
      Vendor: "Solvents Unlimited",
      Density: 784,
      Viscosity: 0.00301,
      Packaging: "Canister",
      "Pack Size": 10,
      Unit: "L",
      Quantity: 200,
    },
  },
  {
    id: 5,
    supplies: {
      "Chemical Name": "Ammonia",
      Vendor: "Gas Supplies Ltd.",
      Density: 681,
      Viscosity: 0.000975,
      Packaging: "Cylinder",
      "Pack Size": 50,
      Unit: "kg",
      Quantity: 10,
    },
  },
  {
    id: 6,
    supplies: {
      "Chemical Name": "Hydrogen Peroxide",
      Vendor: "Oxidizers Corp.",
      Density: 1450,
      Viscosity: 0.001245,
      Packaging: "Bottle",
      "Pack Size": 5,
      Unit: "L",
      Quantity: 500,
    },
  },
  {
    id: 7,
    supplies: {
      "Chemical Name": "Methanol",
      Vendor: "Organic Solvents Ltd.",
      Density: 791,
      Viscosity: 0.000543,
      Packaging: "Drum",
      "Pack Size": 200,
      Unit: "L",
      Quantity: 120,
    },
  },
  {
    id: 8,
    supplies: {
      "Chemical Name": "Benzene",
      Vendor: "Aromatic Compounds Inc.",
      Density: 876,
      Viscosity: 0.00685,
      Packaging: "Barrel",
      "Pack Size": 150,
      Unit: "L",
      Quantity: 80,
    },
  },
  {
    id: 9,
    supplies: {
      "Chemical Name": "Formaldehyde",
      Vendor: "Reactive Chemicals Ltd.",
      Density: 815,
      Viscosity: 0.0041,
      Packaging: "Drum",
      "Pack Size": 100,
      Unit: "L",
      Quantity: 40,
    },
  },
  {
    id: 10,
    supplies: {
      "Chemical Name": "Chloroform",
      Vendor: "Halogen Compounds Co.",
      Density: 1489,
      Viscosity: 0.0055,
      Packaging: "Canister",
      "Pack Size": 20,
      Unit: "L",
      Quantity: 150,
    },
  },
  {
    id: 11,
    supplies: {
      "Chemical Name": "Isopropanol",
      Vendor: "Industrial Solvents Ltd.",
      Density: 786,
      Viscosity: 0.0025,
      Packaging: "Drum",
      "Pack Size": 150,
      Unit: "L",
      Quantity: 200,
    },
  },
  {
    id: 12,
    supplies: {
      "Chemical Name": "Glycerin",
      Vendor: "Viscous Solutions",
      Density: 1260,
      Viscosity: 0.0095,
      Packaging: "Bottle",
      "Pack Size": 1,
      Unit: "L",
      Quantity: 500,
    },
  },
  {
    id: 13,
    supplies: {
      "Chemical Name": "Nitric Acid",
      Vendor: "Acids International",
      Density: 1500,
      Viscosity: 0.00076,
      Packaging: "Drum",
      "Pack Size": 200,
      Unit: "L",
      Quantity: 100,
    },
  },
  {
    id: 14,
    supplies: {
      "Chemical Name": "Acetic Acid",
      Vendor: "Organic Chemicals Ltd.",
      Density: 1050,
      Viscosity: 0.00122,
      Packaging: "Canister",
      "Pack Size": 25,
      Unit: "L",
      Quantity: 300,
    },
  },
  {
    id: 15,
    supplies: {
      "Chemical Name": "Toluene",
      Vendor: "Aromatic Solutions",
      Density: 867,
      Viscosity: 0.0053,
      Packaging: "Barrel",
      "Pack Size": 100,
      Unit: "L",
      Quantity: 75,
    },
  },
];

// logs for sort table by table headers
let log = [
  { header: "Chemical Name", sorted: "not sorted" },
  { header: "Vendor", sorted: "not sorted" },
  { header: "Density", sorted: "not sorted" },
  { header: "Viscosity", sorted: "not sorted" },
  { header: "Packaging", sorted: "not sorted" },
  { header: "Pack Size", sorted: "not sorted" },
  { header: "Unit", sorted: "not sorted" },
  { header: "Quantity", sorted: "not sorted" },
];

let selectedIndex = null;
let assignId = initialData.length;
let data = [];

// Get data from localsorage if present
if (localStorage.getItem("data")) {
  data = JSON.parse(localStorage.getItem("data"));
} else {
  localStorage.setItem("data", JSON.stringify(initialData));
  data = [...initialData];
}

// Function to render table rows in table body
function displayTableData() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td><input type="checkbox" class="row-checkbox" data-id="${
                  item.id
                }" onclick="selectRow(this)"></td>
                <td>${index + 1}</td>
                <td><input type="text" class="table-data" onblur="updateData('${
                  item.id
                }', 'Chemical Name', this.value)" value="${
      item.supplies["Chemical Name"] ? item.supplies["Chemical Name"] : "N/A"
    }"></input></td>
                <td><input type="text" class="table-data"onblur="updateData('${
                  item.id
                }', 'Vendor', this.value)" value="${
      item.supplies.Vendor ? item.supplies.Vendor : "N/A"
    }"></input></td>
                <td><input type="number" class="table-data edit-box" onblur="updateData('${
                  item.id
                }', 'Density', this.value)" value="${
      item.supplies.Density ? item.supplies.Density : 0
    }"></input></td>
                <td><input type="number" class="table-data edit-box" onblur="updateData('${
                  item.id
                }', 'Viscosity', this.value)" value="${
      item.supplies.Viscosity ? item.supplies.Viscosity : 0
    }"></input></td>
                <td><input type="text" class="table-data" onblur="updateData('${
                  item.id
                }', 'Packaging', this.value)" value="${
      item.supplies.Packaging ? item.supplies.Packaging : "N/A"
    }"></input></td>
                <td><input type="number" class="table-data" onblur="updateData('${
                  item.id
                }', 'Pack Size', this.value)" value="${
      item.supplies["Pack Size"] ? item.supplies["Pack Size"] : 0
    }"></input></td>
                <td><input type="text" class="table-data" onblur="updateData('${
                  item.id
                }', 'Unit', this.value)" value="${
      item.supplies.Unit ? item.supplies.Unit : "N/A"
    }"></input></td>
                <td><input type="number" class="table-data edit-box" onblur="updateData('${
                  item.id
                }', 'Quantity', this.value)" value="${
      item.supplies.Quantity ? item.supplies.Quantity : 0
    }"></input></td>
            `;
    tableBody.appendChild(row);
  });

  updateMoveButtons();
}

// Function for sort table by table header
function sortTable(headerName) {
  const columnLog = log.find((item) => item.header === headerName);

  // Sort column based on current sorted state
  if (columnLog.sorted === "not sorted" || columnLog.sorted === "desc") {
    data.sort((a, b) =>
      a.supplies[headerName] > b.supplies[headerName] ? 1 : -1
    );
    columnLog.sorted = "asc";
  } else if (columnLog.sorted === "asc") {
    data.sort((a, b) =>
      a.supplies[headerName] < b.supplies[headerName] ? 1 : -1
    );
    columnLog.sorted = "desc";
  }

  // Update log for other columns
  log.forEach((item) => {
    if (item.header !== headerName) {
      item.sorted = "not sorted";
    }
  });

  displayTableData(); // Re-render table
}

// Add new row to table
function addRow() {
  assignId += 1;
  const newRow = {
    id: assignId,
    supplies: {
      "Chemical Name": "",
      Vendor: "",
      Density: "",
      Viscosity: "",
      Packaging: "",
      "Pack Size": "",
      Unit: "",
      Quantity: "",
    },
  };
  data.push(newRow);
  displayTableData(); // Re-render table
  // Select newly added row
  const checkbox = document.querySelector(`[data-id="${assignId}"]`);
  checkbox.checked = true;
  const row = checkbox.closest("tr");
  row.classList.add("selected");
  updateMoveButtons();
}

// Function to delete checked rows
function deleteRows() {
  const checkboxes = document.querySelectorAll(".row-checkbox:checked");
  checkboxes.forEach((checkbox) => {
    const rowId = checkbox.getAttribute("data-id");
    data = data.filter((item) => item.id != rowId);
  });

  // After delete data deselect selectAllCheckbox
  if (data.length === 0) {
    const selectAllCheckbox = document.getElementById("selectAll");
    selectAllCheckbox.checked = false;
  }
  displayTableData(); // Re-render table
}

// Function to move the row up
function moveRowUp() {
  if (selectedIndex > 0) {
    [data[selectedIndex - 1], data[selectedIndex]] = [
      data[selectedIndex],
      data[selectedIndex - 1],
    ];
    selectedIndex--; // Update selected index
    displayTableData(); // Re-render table
    applySelectedClass(); // Reapply selected class
    updateMoveButtons();
  }
}

// Function to move the row down
function moveRowDown() {
  if (selectedIndex < data.length - 1) {
    [data[selectedIndex + 1], data[selectedIndex]] = [
      data[selectedIndex],
      data[selectedIndex + 1],
    ];
    selectedIndex++; // Update selected index
    displayTableData(); // Re-render table
    applySelectedClass(); // Reapply selected class
    updateMoveButtons();
  }
}

// Function to reapply the 'selected' class to the previously selected row
function applySelectedClass() {
  if (selectedIndex !== null) {
    const allCheckboxes = document.querySelectorAll(".row-checkbox");
    const selectedRow = allCheckboxes[selectedIndex].closest("tr");
    selectedRow.classList.add("selected"); // Add the 'selected' class
    allCheckboxes[selectedIndex].checked = true; // Re-check the checkbox
  }
}

// Function to update data array when table field content changes
function updateData(id, field, newValue) {
  data.map((item) => {
    if (item.id == id) {
      item.supplies[field] = newValue;
    }
  });
}

// Function to refresh data - fetch from local storage
function refreshData() {
  data = JSON.parse(localStorage.getItem("data"));
  displayTableData(); // Re-render table
}

// Function to update data
function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
  if (data.length === 0) {
    const selectAllCheckbox = document.getElementById("selectAll");
    selectAllCheckbox.checked = false;
    alert(
      "To get sample data remove data key from localsorage and refresh page!"
    );
  } else {
    alert("Data saved successfully!");
  }
}

// Function to check selected row and enable/disable buttons
function updateMoveButtons() {
  const checkboxes = document.querySelectorAll(".row-checkbox:checked");
  const moveUpButton = document.getElementById("moveUp");
  const moveDownButton = document.getElementById("moveDown");

  // Disable buttons if no row or more than one row is selected
  if (checkboxes.length !== 1) {
    moveUpButton.disabled = true;
    moveDownButton.disabled = true;
    return;
  }

  const selectedCheckbox = checkboxes[0];
  const allCheckboxes = document.querySelectorAll(".row-checkbox");
  selectedIndex = Array.from(allCheckboxes).indexOf(selectedCheckbox);

  // Enable/disable Move Up and Move Down based on row position
  moveUpButton.disabled = selectedIndex === 0;
  moveDownButton.disabled = selectedIndex === allCheckboxes.length - 1;
}

// Function for select or deselect individual row
function selectRow(checkbox) {
  const row = checkbox.closest("tr");

  // Add or remove 'selected' class based on checkbox state
  if (checkbox.checked) {
    row.classList.add("selected");
  } else {
    row.classList.remove("selected");
  }

  // Handle the select all checkbox state
  const allCheckboxes = document.querySelectorAll(".row-checkbox");
  const selectAllCheckbox = document.getElementById("selectAll");

  if ([...allCheckboxes].every((cb) => cb.checked)) {
    selectAllCheckbox.checked = true;
  } else {
    selectAllCheckbox.checked = false;
  }

  updateMoveButtons();
}

// Fnction for select or deselect all rows
function selectAllRows(selectAllCheckbox) {
  const allCheckboxes = document.querySelectorAll(".row-checkbox");

  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;

    const row = checkbox.closest("tr");

    // Add or remove 'selected' class based on select all state
    if (checkbox.checked) {
      row.classList.add("selected");
    } else {
      row.classList.remove("selected");
    }
  });
}

displayTableData(); // Render table
