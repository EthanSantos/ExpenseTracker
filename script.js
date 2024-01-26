const nameInput = document.querySelector(".nameInput input")
const dateInput = document.getElementById("dateInput")
const amountInput = document.getElementById("amountInput")

const addButton = document.querySelector(".buttons")
const table = document.getElementById("inputTable")

function loadInfo(){
    if (table.rows.length == 1){
        // table is empty
        const row = table.insertRow(1)
        const cell = row.insertCell(0)
        cell.innerHTML = "No Expenses added yet!";
        cell.colSpan = 4
    }
}

function clearInput(){

}

function deleteData(button){
    const row = button.parentNode.parentNode // get parent row of button
    row.parentNode.removeChild(row) // remove row from table
}

function getInfo(){
    if (nameInput.value == "" || dateInput.value == "" ||  amountInput.value == ""){
        alert("Cannot leave input blank!")
        return
    }

    const row = table.insertRow(1)

    row.insertCell(0).innerHTML = nameInput.value;
    row.insertCell(1).innerHTML = dateInput.value;
    row.insertCell(2).innerHTML = "$" + amountInput.value;
    row.insertCell(3).innerHTML = '<button onclick="deleteData(this)">Delete</button>'; // add de;eteBittpm
}

addButton.addEventListener("click", ()=>{
    getInfo()
})

loadInfo()

// add total amount at the bottom row