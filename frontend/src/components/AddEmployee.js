import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Content from "./Content";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddEmployee = () => {
	let history = useHistory();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const resetHandler = () => {
		setName("");
		setEmail("");
		setPhone("");
	};

	const submitHandler = async(e) => {
		e.preventDefault();
		await axios.post('/api/employees', {name, email, phone});
		resetHandler();
		history.push("/");
	};

	useEffect(() => {}, []);

	return (
		<Content title="Add New Employee">
			<Form style={{paddingRight:"4em"}} onSubmit={submitHandler}>
				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm="2" style={{textAlign:"right", paddingRight:"2em"}}>Name</Form.Label>
					<Col sm="10"><Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/></Col>
				</Form.Group>

				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm="2" style={{textAlign:"right", paddingRight:"2em"}}>Email</Form.Label>
					<Col sm="10"><Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></Col>
				</Form.Group>

				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm="2" style={{textAlign:"right", paddingRight:"2em"}}>Phone</Form.Label>
					<Col sm="10"><Form.Control type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/></Col>
				</Form.Group>

				<Row>
					<Col style={{textAlign:"right"}}>
						<Button variant="light" style={{marginRight:"1em"}} type="button" onClick={resetHandler}>Reset</Button>
						<Button variant="primary" type="submit">Submit</Button>
					</Col>
				</Row>
			</Form>
		</Content>
	)
}

export default AddEmployee
