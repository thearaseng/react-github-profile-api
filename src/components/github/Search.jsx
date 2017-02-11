import React, {Component} from 'react';

class Search extends Component{

	searchUser(e){
		e.preventDefault();
		let username = this.refs.username
		this.props.searchUser(username.value)
		username.value = ''
	}

	render() {
		return(
			<div className="row">
				<div className="col-md-12">
					<form onSubmit={this.searchUser.bind(this)}>
						<label>Search Github User</label>
						<input className="form-control" type="text" ref="username" placeholder="e.g john" />
					</form>
					<br />
				</div>
			</div>
			)
	}

}

export default Search