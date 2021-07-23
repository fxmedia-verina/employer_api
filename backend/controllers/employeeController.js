const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModels");

const getEmployees = asyncHandler(async (req, res) => {
	try {
		let employees = [];
		if(req.query.name || req.query.phone || req.query.email){
			employees = await Employee.find({name:{$regex: req.query.name, $options: "i"}, email:{$regex: req.query.email}, phone:{$regex: req.query.phone}});
		} else {
			employees = await Employee.find({});
		}
		res.json(employees);
	} catch(error){
		console.log(error);
	}
});

const createEmployee = asyncHandler(async (req, res) => {
	const { name, email, phone } = req.body;
	try {
		if (!name || !email) {
			res.status(400);
			throw new Error("Please fill all the fields !");
		} else {
			const employee = new Employee({name, email, phone});
			const createdEmployee = await employee.save();
			res.status(201).json(createdEmployee);
		}
	} catch(err){
		console.log(err);
	}
});

const getEmployeeById = asyncHandler(async (req, res) => {
	const employee = await Employee.findById(req.params.id);
	if (employee) {
		res.json(employee);
	} else {
		res.status(404).json({message: "Employee not found"});
	}
});

const updateEmployee = asyncHandler(async (req, res) => {
	const { name, email, phone } = req.body;
	const employee = await Employee.findById(req.params.id);
	if (employee) {
		employee.name = name;
		employee.email = email;
		employee.phone = phone;
		const updatedEmployee = await employee.save();
		res.json(updatedEmployee);
	} else {
		res.status(404).json({message: "Employee not found"});
	}
});

const deleteEmployee = asyncHandler(async (req, res) => {
	const employee = await Employee.findById(req.params.id);
	if (employee) {
		await employee.remove();
		res.json({message: "Note has been removed"});
	} else {
		res.status(404).json({message: "Note not found"});
	}
});

module.exports = {getEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee};