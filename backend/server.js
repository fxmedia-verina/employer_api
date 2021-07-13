const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require("path");

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use('/api/employees', employeeRoutes);

// deployment
__dirname=path.resolve();
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
} else {
	app.get('/', (req, res) => {
		res.send("API is running");
	});
}

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT);