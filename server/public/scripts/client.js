console.log("testing");

let salaryTotal = 0;

// when you click the submit button

function addEmployee(){

let firstName = document.querySelector("#first-name").value;
let lastName = document.querySelector("#last-name").value;
let id = document.querySelector("#id").value;
let title = document.querySelector("#title").value;
let salary = Number(document.querySelector("#annual-salary").value);

let employee = document.querySelector("#employee-table");
let totalSalary = document.querySelector("#monthly-salary");

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
monthlyTotal = salaryTotal / 12;
totalSalary.innerHTML = `
Monthly Total = $${monthlyTotal}
`

if (monthlyTotal >= 20000){
    totalSalary.style.backgroundColor = 'red';
}

clearInput();

console.log(firstName, lastName, id, title, salary);
console.log("salary total", salaryTotal);


}

function deleteEmployee(event) {
    event.target.closest("tr").remove();
}

function clearInput(){
    document.querySelector("#first-name").value = '';
    document.querySelector("#last-name").value = '';
    document.querySelector("#id").value = '';
    document.querySelector("#title").value = '';
    document.querySelector("#annual-salary").value = '';
}