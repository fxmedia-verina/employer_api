const express = require('express');
const { getEmployees, createEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.route('/').get(getEmployees);
router.route('/').post(createEmployee);

module.exports = router;