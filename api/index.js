const req = new XMLHttpRequest();
const api = "http://localhost:8080/AccountSETemplate/api/";
const createAccountForm = document.getElementById("new-account-form");

toggleAccountForm("hidden");

function displayData(data) {
    console.log(data);
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

    //Set up the initial table
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

    //Create table header cell for the selection boxes
    let headCell = document.createElement("th");
    headCell.innerHTML = "<b>Selection</b>";
    head.appendChild(headCell);

    //Attach the table to the document
    document.getElementById("data-table").appendChild(myTable);

    //Start appending the data
    let body = myTable.createTBody();

    //Create table rows
    accounts.forEach(element => {
        row = body.insertRow();

        for (let i = 0; i < keys.length + 1; i++) {
            let cell = row.insertCell();
            console.log(element);

            if (i < keys.length) {
                let text = document.createTextNode(element[keys[i]]);
                cell.append(text);
            } else {
                let selector = document.createElement("INPUT");
                selector.setAttribute("type", "checkbox");
                selector.setAttribute("id", element[keys[0]])
                selector.setAttribute("tag", "selector")
                cell.append(selector);
            }
        }
    });
}

function getAllAccounts(callback) {

    req.onload = () => {
        callback(req.responseText);
    }

    req.open("GET", api + "account/getAllAccounts");
    req.send();
}

function getAccountById() {
    var id = prompt("Enter ID of Account to Retrieve: ");

    makeRequest("GET", `account/findAccount/${id}`, "")
        .then()
        .catch(error => {
            console.log(error);
        }
        );

}

function makeRequest(method, url, body) {
    return new Promise((res, rej) => {
        const req = new XMLHttpRequest();
        req.open(method, api + url);

        req.onload = () => {
            if (req.status >= 200 && req.status < 300) {
                res(displayData(req.responseText));
            } else {
                rej(req.statusText);
            }
        };

        req.send(body);
    });
}

function createAccount() {
    const accountNumberInput = document.getElementById("inlineFormInputAccountNo");
    const firstNameInput = document.getElementById("inlineFormInputFname");
    const lastNameInput = document.getElementById("inlineFormInputLname");
    const body = `{\"accountNumber\":\"${accountNumberInput.value}\",\"firstName\":\"${firstNameInput.value}\",\"lastName\":\"${lastNameInput.value}\"}`;

    console.log(body);

    req.open("POST", api + "account/createAccount");
    req.send(body);

    req.onload = function () {
        const resp = JSON.parse(req.responseText);
        console.log(req.responseText);
        if (resp.message == "Account has been created sucessfully") {
            toggleAccountForm("hidden");
            accountNumberInput.value = "";
            firstNameInput.value = "";
            lastNameInput.value = "";
        }
        window.alert(resp.message);
    }
}

function toggleAccountForm(visibilityState) {
    if (visibilityState === undefined) {
        createAccountForm.style.visibility = createAccountForm.style.visibility == "hidden" ? "visible" : "hidden";
        return;
    }
    createAccountForm.style.visibility = visibilityState;
}

function deleteAccount() {
    var id = prompt("Enter ID of Account to Delete: ");
    req.open("DELETE", api + "account/deleteAccount/" + id)
    req.send();

    req.onload = () => {
        var res = JSON.parse(req.responseText);
        window.alert(res.message);
    }
}

function updateTest() {
    //const body = "{\"accountNumber\":\"0000\",\"firstName\":\"Bobson\",\"lastName\":\"Dugnutt\"}";
    const form = document.getElementById("account-form").setAttribute("onSubmit", "updateAccount(); return false");
    toggleAccountForm("visible");

    const accountNumberInput = document.getElementById("inlineFormInputAccountNo");
    const firstNameInput = document.getElementById("inlineFormInputFname");
    const lastNameInput = document.getElementById("inlineFormInputLname");
    const body = `{\"accountNumber\":\"${accountNumberInput.value}\",\"firstName\":\"${firstNameInput.value}\",\"lastName\":\"${lastNameInput.value}\"}`;

    console.log("checks");
    const checks = document.getElementsByTagName("selector");
    for (let check of checks) {
        console.log(check);
    }

    // req.open("PUT", api + "account/updateAccount/" + id);
    // req.send(body);

    // req.onload = function () {
    //     console.log(req.responseText);
    // }
}

function updateAccount() {
    window.alert("test");
}