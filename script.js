const table = document.querySelector("#myTable");


function createTable() {
    // Clear previous table content
	const a = prompt("Input number of rows");
const b = prompt("Input number of cols");
    table.innerHTML = '';

    // Parse inputs and trim spaces
    let row = parseInt(a);
    let col = parseInt(b);

    // Fix isNaN check: it should check row and col separately, not inside isNaN together
    if (isNaN(row) || isNaN(col)) {
        
        return;
    }

    if (row <= 0 || col <= 0) {
        alert("Please input valid positive numbers");
        return;
    }

    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');

        if (i === 0) {
            // Header row
            for (let j = 0; j < col; j++) {
                let td = document.createElement('td');
                td.textContent = `Row-${i} Column-${j}`;
                tr.appendChild(td);
            }
        } else {
            // Data rows
            for (let j = 0; j < col; j++) {
                let td = document.createElement('td');
                td.textContent = `Row-${i} Column-${j}`;
                tr.appendChild(td);
            }
        }

        table.appendChild(tr);
    }
}

createTable();
