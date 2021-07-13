import { Card, Container, Row } from "react-bootstrap"

const Content = ({title, children}) => {
	return (
		<div style={{marginLeft:"270px", marginTop:"25px", marginRight:"25px"}}>
			<Container>
				<Row>
					<div>
					<Card >
						<Card.Header style={{fontSize:"1.25em"}}>{title}</Card.Header>
						<Card.Body>
							{children}
						</Card.Body>
					</Card>
					</div>
				</Row>
			</Container>
		</div>
	)
}

export default Content
