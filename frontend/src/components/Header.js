import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
	return (
		<Row>
			<Col style={{paddingRight:"0px"}} className="col-2">
				<div className="sidebar">
					<Row className="menu-sidebar">
						<Col className="col-3 icon-sidebar"><span className="iconify" data-icon="mdi:home" data-inline="false"></span></Col>
						<Col style={{paddingTop:"8px"}}><Link className="unset" to="/">Dashboard</Link></Col>
					</Row>
					<Row className="menu-sidebar">
						<Col className="col-3 icon-sidebar"><span className="iconify" data-icon="mdi:account-plus" data-inline="false"></span></Col>
						<Col style={{paddingTop:"8px"}}><Link className="unset" to="/add-employee">Add Employee</Link></Col>
					</Row>
				</div>
			</Col>
			<Col style={{paddingLeft:"0px"}}>
				<Navbar style={{backgroundColor:"#34495e"}}>
					<Container>
						<Navbar.Brand href="#home" style={{color:"#fff"}}>Dashboard</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text className="text-light">
								<span className="iconify" data-icon="mdi:home" data-inline="false"></span> / Dashboard
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Col>
		</Row>
	)
}

export default Header
