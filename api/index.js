const req = new XMLHttpRequest();
const api = "http://localhost:8080/AccountSETemplate/api/";

// getTest();
// updateTest(5);
// getTest();
// displayData("");


function displayData(data) {
    var accounts = [];

    let parsedData = JSON.parse(data); //Convert the json data to an object

    if (Array.isArray(parsedData)) { //if its an array merge it into accounts
        accounts = accounts.concat(parsedData);
        console.log(accounts);
    } else {
        accounts.push(parsedData); //if not just push it
    }

    let myTable = document.getElementById("tbl");
    let keys = Object.keys(accounts[0]); //Get all of the keys for the object. We dont care about which object.

    if (!!myTable) {
        document.getElementById("data-table").removeChild(myTable);
    }

    //Set up the initial table if it doesn't exist yet
    //Otherwise skip this step and append the data
  //  if (!!!document.getElementById("tbl")) {
        myTable = document.createElement("table");
        myTable.className = "table table-hover"; //Bootstrap
        myTable.id = "tbl";
        let head = myTable.createTHead();
        head.className = "thead-dark"; //Bootstrap        

        //Create table headers    
        for (let key of keys) {
            let cell = document.createElement("th");
            cell.innerHTML = "<b>" + key + "</b>";
            head.appendChild(cell);
        }

        //Attach the table to the document
        document.getElementById("data-table").appendChild(myTable);

  //  } else {
   //     myTable = document.getElementById("tbl");
   // }


    //Start appending the data
    let body = myTable.createTBody();

    //Create table rows
    accounts.forEach(element => {
        row = body.insertRow();

        for (let i = 0; i < keys.length; i++) {
            let cell = row.insertCell();
            console.log(element);
            let text = document.createTextNode(element[keys[i]]);
            cell.append(text);
        }

    });

}

function getAllAccounts() {

    req.onload = function () {
        displayData(req.responseText);
    }

    req.open("GET", api + "account/getAllAccounts");
    req.send();

}

function getAccountById() {
    var id = prompt("Enter ID of Account to Retrieve: ");

    req.onload = function () {
        displayData(req.responseText);
    }

    req.open("GET", api + "account/findAccount/" + id);
    req.send();

}

function postTest() {
    const body = "{\"accountNumber\":\"7569\",\"firstName\":\"Bobson\",\"lastName\":\"Dugnutt\"}";

    req.open("POST", api + "account/createAccount");
    req.send(body);

    req.onload = function () {
        console.log(req.responseText);
    }

}

function deleteAccount() {
    var id = prompt("Enter ID of Account to Delete: ");
    req.open("DELETE", api + "account/deleteAccount/" + id)
    req.send();

    req.onload = function () {
        var res = JSON.parse(req.responseText);
        window.alert(res.message);
    }
}

function updateTest(id) {
    const body = "{\"accountNumber\":\"0000\",\"firstName\":\"Bobson\",\"lastName\":\"Dugnutt\"}";

    req.open("PUT", api + "account/updateAccount/" + id);
    req.send(body);

    req.onload = function () {
        console.log(req.responseText);
    }
}