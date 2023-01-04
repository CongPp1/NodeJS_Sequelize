
const { error } = require('console');
const pool = require('./database');

const getEmployee = (req, res) => {
    pool.query("SELECT * FROM employee", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getEmployeeById = (req, res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM employee WHERE employee_id = $1", [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const addNewEmployee = (req, res) => {
    const { employee_name, birthday, employee_position, entry_date, email } = req.body;
    pool.query("SELECT e FROM empolyee e WHERE e.email = $1", [email], (error, results) => {
        if (results && results.rows.lenght) {
            res.send('Email already exists!');
        }
        pool.query("INSERT INTO employee (employee_name, birthday, employee_position, entry_date ,email) VALUES ($1, $2, $3, $4, $5)"
            , [employee_name, birthday, employee_position, entry_date, email], (error, results) => {
                if (error) throw error;
                res.status(201).send("Adding a new employee is successfully!!!");
            });
    });
};

const deleteEmployeeById = (req, res) => {
    const id = req.params.id;
    pool.query("DELETE FROM employee WHERE employee_id = $1", [id], (error, results) => {
        const userExistsById = results.rows.length;
        if (!userExistsById) {
            res.send("User is not exists!");
        }
        pool.query("DELETE FROM employee WHERE employee_id = $1", [id], (error, results) => {
            res.status(200).send("Employee deleted successfully!!");
        });
    });
};

const updateEmployeeById = (req, res) => {
    const id = req.params.id;
    pool.query("UPDATE employee SET employee_name = $1, birthday = $2, employee_position = $3, entry_date = $4, email = $5 WHERE employee_id = &6", [id],
        (error, results) => {
            const userExistsById = results.rows.length;
            if (!userExistsById) {
                res.send("User is not exists!");
            }
            pool.query("UPDATE employee SET employee_name = $1, birthday = $2, employee_position = $3, entry_date = $4, email = $5 WHERE employee_id = &6", [id],
                (error, results) => {
                    res.status(200).send("User updated successfully!");
                });
        });
};

module.exports = {
    getEmployee,
    getEmployeeById,
    addNewEmployee,
    deleteEmployeeById,
    updateEmployeeById,
}