console.log("testing");

// when you click the submit button

function addEmployee(event){
let firstName = document.querySelector("#first-name").value;
let lastName = document.querySelector("#last-name").value;
let id = document.querySelector("#id").value;
let title = document.querySelector("#title").value;
let salary = document.querySelector("#annual-salary").value;



console.log(firstName, lastName, id, title, salary);

}

function deleteEmployee(event) {
    event.target.closest("tr").remove();
  }