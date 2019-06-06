function generateGameGrid(x, y) {
  const row = Array(x).map(() => 0);
  const grid = Array(y).map(() => row);

  return grid;
}

function createHtmlTable(data) {
  const table = document.createElement("table");
  for (let row in data) {
    console.log(row);
    let tableRow = document.createElement("tr");
    for (const element of row) {
      let tableCell = document.createElement("td");
      const tableCellValue = document.createTextNode(element);
      tableCell.appendChild(tableCellValue);
      tableRow.appendChild(tableCell);
    }

    table.appendChild(tableRow);
  }

  return table;
}

document.getElementById("btnTable").addEventListener("click", function() {
  const x = document.getElementById("inputTableWidth").value;
  const y = document.getElementById("inputTableHeight").value;
  const grid = generateGameGrid(+x, +y);

  console.log(`${x} : ${y}`);

  const table = createHtmlTable(grid);
  document.getElementById("gameGrid").innerHTML = table.outerHTML;
});
