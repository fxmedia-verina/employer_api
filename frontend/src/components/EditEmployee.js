import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Content from "./Content";
import TitleBar from "./TitleBar";
import axios from "axios";

const EditEmployee = () => {
	let history = useHistory();
	const { id } = useParams();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

	const resetHandler = () => {
		setName("");
		setEmail("");
		setPhone("");
		setError("");
	};

	const submitHandler = async(e) => {
		setError("");
		e.preventDefault();
		try {
			if (phone.length < 11) {
				const { data } = await axios.put('/api/employees/'+id, {name, email, phone});
				setMessage("Employee has been successfully edited !");
			} else {
				setMessage("Phone number length must not be over than 11 number !");
			}
		} catch(error){
			setError("Problem with adding new employee !");
		}
		
	};

	useEffect(() => {
		setMessage("");
	}, [phone]);

	useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get('/api/employees/'+id);
			setName(data.name);
			setEmail(data.email);
			setPhone(data.phone);
		};
	  
		fetching();
	}, [])
	
	return (
		<Content>
			<TitleBar judul="Edit Employee" />
			<div className="row">
				<div className="col-xs-12">
					{
						error &&
						(<div className="alert alert-danger">
							<strong>{error}</strong>
						</div>)
					}
					{
						message &&
						(<div className="alert alert-warning">
							<strong>{message}</strong>
						</div>)
					}
					<section className="panel">
						<header className="panel-heading">
							<div className="panel-actions">
								<a href="#" className="fa fa-caret-down"></a>
								<a href="#" className="fa fa-times"></a>
							</div>
			
							<h2 className="panel-title">Edit Employee</h2>
						</header>
						<div className="panel-body">
							<Form style={{paddingRight:"4em"}} onSubmit={submitHandler}>
								<Form.Group as={Row} className="mb-3">
									<Form.Label column sm="2" style={{textAlign:"right", paddingRight:"2em"}}>Name <span className="text-danger">*</span></Form.Label>
									<Col sm="10"><Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/></Col>
								</Form.Group>

								<Form.Group as={Row} className="mb-3">
									<Form.Label column sm="2" style={{textAlign:"right", paddingRight:"2em"}}>Email <span className="text-danger">*</span></Form.Label>
									<Col sm="10"><Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/></Col>
								</Form.Group>

								<Form.Group as={Row} className="mb-3">
									<Form.Label column sm="2" style={{textAlign:"right", paddingRight:"2em"}}>Phone</Form.Label>
									<Col sm="10"><Form.Control type="number" onPaste={e=>{e.preventDefault(); return false}} onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/></Col>
								</Form.Group>

								<Row>
									<Col style={{textAlign:"right"}}>
										<Button variant="light" style={{marginRight:"1em"}} type="button" onClick={resetHandler}>Reset</Button>
										<Button variant="primary" type="submit">Submit</Button>
									</Col>
								</Row>
							</Form>
						</div>
					</section>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<a href="/employees">Back to Employee Page</a>
				</div>
			</div>
		</Content>
	)
}

export default EditEmployee
