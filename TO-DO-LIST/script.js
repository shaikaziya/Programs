var toDoContainer=document.getElementById("toDoContainer")
document.body.append(toDoContainer)


var ptag1=document.getElementById("ptag")

var array=[]

var table=document.createElement("table")


var thead=document.createElement("thead")


var tr1=document.createElement("tr")

var th1=document.createElement("th")
th1.innerText="Name"
var th2=document.createElement("th")
th2.innerText="Delete"
var th3=document.createElement("th")
th3.innerText="Edit"





var tbody=document.createElement("tbody")

var tr2=document.createElement("tr")

var td1=document.createElement("td")
td1.innerText="Name"
var td2=document.createElement("td")
td2.innerHTML="<button>Delete</button>"
var td3=document.createElement("td")
td3.innerHTML="<button>Edit</button>"

function Add(){
    var ptag=document.getElementById("inputField").value
    array.push(ptag)
    // toDoContainer.append(array)
    ptag1.append(array)
    inputField.value=""
    
}

function Delete(){
    // toDoContainer.removeChild(toDoContainer.firstElementChild);
    ptag1.remove();
    // ptag1.removeChild(ptag1.firstElementChild);



}

function Edit(){
}

tr2.append(td1,td2,td3)
tr1.append(th1,th2,th3)
tbody.append(tr2)
thead.append(tr1)
table.append(tbody,thead)
document.body.append(table)