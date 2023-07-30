console.log("testing");

// total salary
let salaryTotal = 0;

// on click function to take in inputs and add employees to table
function addEmployee() {

    // employee input values
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let id = document.querySelector("#id").value;
    let title = document.querySelector("#title").value;
    let salary = Number(document.querySelector("#annual-salary").value);

    // table id on DOM
    let employee = document.querySelector("#employee-table");
    // salary id on DOM
    let totalSalary = document.querySelector("#monthly-salary");

    // add employee input to table
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

    // monthly salary sent to DOM
    salaryTotal = salaryTotal + salary;
    monthlyTotal = salaryTotal / 12;
    totalSalary.innerHTML = `
        Monthly Total = $${monthlyTotal}
        `

    // monthly salary turns red if over 20,000
    if (monthlyTotal >= 20000) {
        totalSalary.style.backgroundColor = 'red';
    }

    // clears input values
    clearInput();

    console.log(firstName, lastName, id, title, salary);
    console.log("salary total", salaryTotal);


}

// delete nearest table row function
function deleteEmployee(event) {
    event.target.closest("tr").remove();
}

// clear input function
function clearInput() {
    document.querySelector("#first-name").value = '';
    document.querySelector("#last-name").value = '';
    document.querySelector("#id").value = '';
    document.querySelector("#title").value = '';
    document.querySelector("#annual-salary").value = '';
}