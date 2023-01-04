const getEmployee = "SELECT * FROM employee";
const getEmployeeById = "SELECT * FROM employee WHERE id = $1";
const employeeExistsByEmail = "SELECT e FROM employee e WHERE e.email = $1";
const addNewEmployee = "INSERT INTO employee (employee_name, birthday, employee_position, entry_date ,email) VALUES ($1, $2, $3, $4)";
const deleteEmployeeById = "DELETE FROM employee WHERE employee_id = $1";
const updateEmployeeById = "UPDATE employee SET employee_name = $1, birthday = $2, employee_position = $3, entry_date = $4, email = $5 WHERE employee_id = &6";

module.exports = {
    getEmployee,
    getEmployeeById,
    employeeExistsByEmail,
    addNewEmployee,
    deleteEmployeeById,
    updateEmployeeById,
}