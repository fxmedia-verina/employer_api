import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import Content from "./Content"
import axios from 'axios';

const Dashboard = () => {
	const [employees, setEmployees] = useState([]);

	const fetchEmployees = async() => {
		const {data} = await axios.get('/api/employees');
		setEmployees(data);
	};

	useEffect(() => {
		fetchEmployees();
	}, [])
	return (
		<Content title="Employee List">
			<Table hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{
						employees?.map((employee) => (
							<tr>
								<td>{employee.name}</td>
								<td>{employee.email}</td>
								<td>{employee.phone}</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</Content>
	)
}

export default Dashboard
