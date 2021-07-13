const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModels");

const getEmployees = asyncHandler(async (req, res) => {
	const employees = await Employee.find({});
	res.json(employees);
});

const createEmployee = asyncHandler(async (req, res) => {
	const { name, email, phone } = req.body;
	if (!name || !email || !phone) {
		res.status(400);
		throw new Error("Please fill all the fields !");
	} else {
		const employee = new Employee({name, email, phone});
		const createdEmployee = await employee.save();
		res.status(201).json(createdEmployee);
	}
});

module.exports = {getEmployees, createEmployee};