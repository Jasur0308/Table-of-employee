// DESTRUCTURING


// OBJECT DESTRUCTURING

// let user = {
//     name: "John",
//     age: "20",
//     email: "john@gmail.com"
// }

// const {name, age} = user;   //destructuring

// document.write(name);

// document.write(name);

// document.write(age);

// document.write(age);



// ARRAY DESTRUCTURING

// let arr = [3, 8, 9, 2];

// const [ , a,  , b] = arr;

// console.log(a, b);



// REST

// let user = {
//     name: "John",
//     age: 20,
//     email: "john@gmail.com",
//     address: {
//         street: "51 Avenue"
//     },
//     password: "12345678"
// }

// // const {password, age, ...qolgani} = user;
// let { address: {street} } = user;
// console.log(street);

// console.log(qolgani);



// SPREAD

// let arr1 = [1,2, 3];
// let arr2 = [4, 5, 6];
// let sum = [...arr1, ...arr2];

// console.log(sum);



// LINKING INPUT WITH JAVASCRIPT

// const usernameInput = document.getElementById("usernameInput");

// usernameInput.addEventListener("input", () => {
//     console.log(usernameInput.value);
// })



// const brightnessInput = document.querySelector("#brightnessInput");
// const previewImage = document.querySelector("#previewImage");


// brightnessInput.addEventListener("input", () => {
//     console.log(brightnessInput.value)
//     previewImage.style = `filter: brightness(${brightnessInput.value * 2}%);`
// })



const employeeName = document.getElementById("employeeName");
const earnings = document.getElementById("salary");
const add = document.getElementById("add");
const deleted = document.getElementById("delete");
const employeeTable = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];

let arr = [];

function Person(employeeName, earnings) {
    this.name = employeeName,
    this.salary = earnings
}

function addedArray() {
    if(employeeName.value && earnings.value) {
        const employee = new Person(employeeName.value, earnings.value);
        arr.push(employee);
        employeeName.value = '';
        earnings.value = '';
        updateTable();
        console.log(arr);
    }
}

function deletedArray() {
    if(employeeName.value && earnings.value) {
        const employeeIndex = arr.findIndex(employee => employee.name === employeeName.value && employee.salary === earnings.value);
        if (employeeIndex !== -1) {
            arr.splice(employeeIndex, 1);
            employeeName.value = '';
            earnings.value = '';
            updateTable();
            console.log(arr);
        }
    }
}

function updateTable() {
    employeeTable.innerHTML = '';
    
    arr.forEach((employee, index) => {
        let row = employeeTable.insertRow(index);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        cell0.innerHTML = index + 1;
        cell1.innerHTML = employee.name;
        cell2.innerHTML = employee.salary;
    });
}

add.addEventListener("click", () => {
    addedArray();
});

deleted.addEventListener("click", () => {
    deletedArray();
});