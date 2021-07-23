const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
	{
	  name: {
		type: String,
		required: true,
	  },
	  email: {
		type: String,
		required: true,
		unique: true,
	  },
	  phone: {
		type: String,
		required: false,
	  },
	},
	{
	  timestamps: true,
	}
  );

  const Employee = mongoose.model("employee", employeeSchema, "employees");
  module.exports = Employee;