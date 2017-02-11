import React, {Component} from 'react';
import RepoList from './RepoList.jsx'
class Profile extends Component {

	render() {
		return(
				<div className="panel panel-default">
					<div className="panel-heading">{this.props.userData.name}</div>
				  <div className="panel-body">
				    <div className="row">
				    	<div className="col-md-4">
				    		<img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}} />
				    	</div>
				    	<div className="col-md-8">
				    		<div className="row">
				    			<div className="col-md-12">
						    		<span className="label label-primary">Public Repos {this.props.userData.public_repos}</span>
						    		<span className="label label-success">Public Repos {this.props.userData.public_gists}</span>
						    		<span className="label label-info">Public Repos {this.props.userData.followers}</span>
						    		<span className="label label-danger">Public Repos {this.props.userData.following}</span>
				    			</div>
				    		</div>
				    		<div className="row">
				    			<div className="col-md-12">
				    				<ul className="list-group">
				    					<li className="list-group-item"><strong>Username: </strong>{this.props.userData.name}</li>
				    					<li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
				    					<li className="list-group-item"><strong>Email: </strong>{this.props.userData.email ? this.props.userData.email : 'not avaiable'}</li>
				    				</ul>
				    			</div>
				    			<div className="col-md-12">
				    				<a href={this.props.userData.html_url} className="btn btn-primary">Visit Profile</a>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col-md-12">
				    		{
				    			<RepoList {...this.props} />
				    		}
				    	</div>
				    </div>
				  </div>
				</div>
			)
	}
}

export default Profile