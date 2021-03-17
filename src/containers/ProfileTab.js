import React, { Component } from 'react';
import { profileState } from './../constants/ProfileTabConst.js'
import { Collapse, Table, Grid, Row, Col } from 'react-bootstrap';
import './../styles/Profile.css';


class ProfileTab extends Component {

	constructor(props){
		super(props);
		this.state = profileState
	}


	render() {
		return (
			<div>
				{(this.props.printing) && (
					<h1 className="pr-print-header">{this.state.tabName}</h1>
				)}
				<div>
					<Grid fluid>
						<Row>
							<Col xs={12}>
								<div className="pr-title">
									<span>{this.state.greeting}</span>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xs={12}>
								<Row>
									{this.state.body.map((paragraph, index) =>
									<Col xs={12} className="pr-body" key={index}>
										<span>{paragraph}</span>
									</Col>
									)}
								</Row>
								<Row style={{paddingTop: "30px", paddingBottom: "30px"}}>
									{this.state.logos.map((logo, index) =>
									<Col xs={6} sm={4} lg={3} className="pr-logos-paragraph">
										<a href={logo.href}>
											<img src={logo.src} alt={logo.name} className="pr-logos"/>
										</a>
									</Col>
									)}
								</Row>
								<Row>
									{this.state.footer.map((paragraph, index) =>
									<Col xs={12} className="pr-footer" key={index}>
										<span>{paragraph}</span>
									</Col>
									)}
								</Row>
							</Col>
						</Row>
					</Grid>
					<hr className="pr-line"></hr>
				</div>
			</div>
		);
	}
}

export default ProfileTab;
