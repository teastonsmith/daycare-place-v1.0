import React, { Component } from 'react';
import axios from 'axios';
import { updateUser } from '../../redux/reducer';
import { connect } from 'react-redux';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
  }

  componentDidMount() {
		axios.get('/auth/user').then((res) => {
			this.props.updateUser(res.data)
			this.props.history.push('/details')
		})
		this.props.id && this.props.history.push('/details')
	}

	render() {
		return (
			<div>
<p>Login</p>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(
  mapStateToProps, {updateUser}
)(Login)