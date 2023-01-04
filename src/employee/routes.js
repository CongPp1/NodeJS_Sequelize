const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEmployee);
router.get('/:id', controller.getEmployeeById);
router.post('/add', controller.addNewEmployee);
router.delete('/delete/:id', controller.deleteEmployeeById);
router.put('/update/:id', controller.updateEmployeeById);

module.exports = router;