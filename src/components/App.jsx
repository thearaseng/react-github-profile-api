import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Profile from './github/Profile.jsx'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username : 'thearasengkh',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: true,
			success: function(data){
				this.setState({userData: data})
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null})
				console.log(err)
			}
		})
	}

	getUserRepos() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: true,
			success: function(data){
				this.setState({perPage: data})
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({perPage: []})
				console.log(err)
			}
		})
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	render() {
		return(
				<div>
					<Profile {...this.state} />
				</div>
			)
	}
}

App.proptypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: '1f6e353200d771fa9f4f',
	clientSecret: '6d8390e928ac7ef95f79d02b51f4bc116448f22a'
}

export default App