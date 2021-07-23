const express = require('express');
const { getEmployees, createEmployee, deleteEmployee, getEmployeeById, updateEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.route('/').get(getEmployees);
router.route('/').post(createEmployee);
router.route('/:id').get(getEmployeeById)
	.put(updateEmployee)
	.delete(deleteEmployee);

module.exports = router;