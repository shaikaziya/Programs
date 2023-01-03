var toDoContainer = document.getElementById("toDoContainer");
document.body.append(toDoContainer);

var ptag1 = document.getElementById("ptag");

var array = [];

var table = document.createElement("table");
table.setAttribute("id", "table001");

var thead = document.createElement("thead");

var tr1 = document.createElement("tr");
tr1.setAttribute("id", "headerrow001");

var th1 = document.createElement("th");
th1.innerText = "Name";
var th2 = document.createElement("th");
th2.innerText = "Delete";
var th3 = document.createElement("th");
th3.innerText = "Edit";

var tbody = document.createElement("tbody");
tr1.append(th1, th2, th3);
thead.append(tr1);

function add() {
  var uiInput = document.getElementById("inputField").value;
  //td1.innerText=ptag2
  console.log(uiInput);

  array.push(uiInput);
  ptag1.innerText = array;

  //array.push(ptag2)
  // toDoContainer.append(array)
  //ptag1.append(array)
  inputField.value = "";

  var tr2 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  td1.innerText = uiInput;
  td2.innerHTML = `<button id="deleteId" onclick=Delete('${td1.innerText}')>Delete</button>`;
  td3.innerHTML = `<button id="editId" onclick=Edit('${td1.innerText}')>Edit</button>`;
  tr2.setAttribute("id", td1.innerText);
  tr2.append(td1, td2, td3);
  tbody.append(tr2);
}

function Delete(param1) {
  console.log("delete attributeId  " + param1);
  document.getElementById(param1).remove();
}

function Edit(param1) {
  console.log("edit attributeId  " + param1);
  let promptvalue=prompt(`${param1}`,`${param1}`)
  if(promptvalue!=null){
    document.getElementById(param1).innerHTML = promptvalue;
    console.log(promptvalue)
  }


  // document.getElementById(param1).update();
}

table.append(tbody, thead);
document.body.append(table);
