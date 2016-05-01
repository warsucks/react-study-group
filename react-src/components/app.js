let React = require('react');
let ReactDOM = require('react-dom');

let App = React.createClass({
	render: function() {
		return (
			<div>React App Under Construction</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app-container'));

module.exports = App;