import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const Header = () => {
	const addProject = () => {
		browser;
	};

	return (
		<Container>
			<Row>
				<Col>Logo</Col>
			</Row>
			<Row>
				<Col xs="8">
					<span>Logo</span>
				</Col>
				<Col xs="4">
					<span onClick={addProject}>Add Project</span>
				</Col>
			</Row>
		</Container>
	);
};
