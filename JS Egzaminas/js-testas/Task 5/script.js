/* ------------------------------ TASK 5 -----------------------------------
Turimas "employee" objektas.

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getEmployeeFullName" - priims "employee" objektą ir grąžins darbuotojo
pilną vardą (vardas ir pavardė kartu).
2. funkcija "updateEmployeeSalary" - priims "employee" objektą ir naują atlyginimą,
atnaujins atlyginimą objekte ir grąžins atnaujintą objektą.
-------------------------------------------------------------------------- */

// const employee = {
//   firstName: "John",
//   lastName: "Doe",
//   position: "Software Developer",
//   salary: 5000,
// };

function getEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function updateEmployeeSalary(employee, newSalary) {
  const updatedEmployee = { ...employee };
  updatedEmployee.salary = newSalary;
  return updatedEmployee;
}
const employee = {
  firstName: "John",
  lastName: "Doe",
  position: "Software Developer",
  salary: 5000,
};

console.log(getEmployeeFullName(employee));
const updatedEmployee = updateEmployeeSalary(employee, 6000);
console.log(updatedEmployee);
