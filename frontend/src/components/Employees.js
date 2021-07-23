import { useEffect } from "react";
import { useState } from "react";
import Content from "./Content"
import TitleBar from "./TitleBar"
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import DataTable from 'react-data-table-component';

const Employees = () => {
	// let history = useHistory();
	const [filterName, setfilterName] = useState("");
	const [filterPhone, setfilterPhone] = useState("");
	const [filterEmail, setfilterEmail] = useState("")
	const [employees, setEmployees] = useState([]);
	const columns = [
		{
			name: 'Name',
			selector: row => row["name"],
			sortable: true,
		},
		{
			name: 'Email',
			selector: row => row["email"],
			sortable: true,
		},
		{
			name: 'Phone',
			selector: row => row["phone"],
		},
		{
			name:"Action",
			cell: (row) => {
				return(
					<div className="text-center">
						<Button href={'/edit-employees/'+row._id} variant="warning">Edit</Button>
						<Button onClick={()=>deleteHandler(row._id)} variant="danger" style={{marginLeft:"1em"}}>Delete</Button>
					</div>
				)
			}
		},
	];

	const resetHandler = async() => {
		setfilterName("");
		setfilterPhone("");
		setfilterEmail("");
		const {data} = await axios.get('/api/employees');
		setEmployees(data);
	};

	const fetchEmployees = async() => {
		const {data} = await axios.get('/api/employees?name='+filterName+"&phone="+filterPhone+"&email="+filterEmail);
		setEmployees(data);
	};

	const deleteHandler = async (id) => {
		if (window.confirm("Are you sure?")) {
			const { data } = await axios.delete(`/api/employees/${id}`);
			fetchEmployees();
		}
	};

	useEffect(() => {
		fetchEmployees();
	}, []);

	return (
		<Content>
			<TitleBar judul="Employees"/>
			<div className="row">
				<div className="col">
					<section className="panel">
						<header className="panel-heading">
							<div className="panel-actions">
								<a href="#" className="fa fa-caret-up"></a>
								<a href="#" className="fa fa-times"></a>
							</div>
			
							<h2 className="panel-title">Filter Employees</h2>
						</header>
						<div className="panel-body" style={{display:"none"}}>
							<Row>
								<Col sm="4">
									<Form.Label>Filter by Name</Form.Label>
									<Form.Control type="text" placeholder="Name" value={filterName} onChange={(e) => setfilterName(e.target.value)}/>
								</Col>
								<Col sm="4">
									<Form.Label>Filter by Email</Form.Label>
									<Form.Control type="text" placeholder="Email" value={filterEmail} onChange={(e) => setfilterEmail(e.target.value)}/>
								</Col>
								<Col sm="4">
									<Form.Label>Filter by Phone</Form.Label>
									<Form.Control type="text" placeholder="Email" value={filterPhone} onChange={(e) => setfilterPhone(e.target.value)}/>
								</Col>
							</Row>
						</div>
						<div className="panel-footer text-right" style={{display:"none"}}>
							<Button variant="primary-outline" style={{marginRight:"10px"}} onClick={() => {resetHandler()}}>Reset</Button>
							<Button variant="primary" onClick={() => fetchEmployees()}>Filter</Button>
						</div>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<section className="panel">
						<header className="panel-heading">
							<h2 className="panel-title">List Of Employees</h2>
						</header>
						<div className="panel-body">
							<DataTable
								title="Employees Data"
								columns={columns}
								data={employees}
								pagination
								paginationPerPage={5}
								paginationRowsPerPageOptions={[5, 10, 15]}
							/>
							{/* <div className="table-responsive">
								<table className="table mb-none">
									<thead>
										<tr>
											<th>Name</th>
											<th>Email</th>
											<th>Phone</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
									{
										employees?.map((employee) => (
											<tr key={employee._id}>
												<td><a href={'/edit-employees/'+employee._id}>{employee.name}</a></td>
												<td>{employee.email}</td>
												<td>{employee.phone}</td>
												<td className="text-center">
													<Button href={'/edit-employees/'+employee._id} variant="warning">Edit</Button>
													<Button onClick={()=>deleteHandler(employee._id)} variant="danger" style={{marginLeft:"1em"}}>Delete</Button>
												</td>
											</tr>
										))
									}
									</tbody>
								</table>
							</div> */}
						</div>
					</section>
				</div>
			</div>
		</Content>
	)
}

export default Employees
