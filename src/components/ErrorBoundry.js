import React, {Component} from 'react';

class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError:True});
	}

	redner() {
		if (this.state.hasError) {
			return <h1>Ooooops, this is not good!</h1>
		}
	}
}