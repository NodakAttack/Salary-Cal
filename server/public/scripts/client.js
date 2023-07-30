console.log("testing");

let salaryTotal = 0;

// when you click the submit button

function addEmployee(event){

let firstName = document.querySelector("#first-name").value;
let lastName = document.querySelector("#last-name").value;
let id = document.querySelector("#id").value;
let title = document.querySelector("#title").value;
let salary = Number(document.querySelector("#annual-salary").value);
let employee = document.querySelector("#employee-table");
let totalSalary = document.querySelector("#total-salary");

employee.innerHTML += `
<tr>
    <td>${firstName}</td> 
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${salary}</td>
    <td><button onclick="deleteEmployee(event)" >Delete</button></td>

</tr>
`
// salary adds to total salary, passed to html
salaryTotal = salaryTotal + salary;
totalSalary.innerHTML = `
Salary Total = $${salaryTotal}
`



console.log(firstName, lastName, id, title, salary);
console.log("salary total", salaryTotal);

}

function deleteEmployee(event) {
    event.target.closest("tr").remove();
  }