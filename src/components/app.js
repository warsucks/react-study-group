let React = require('react');
let ReactDOM = require('react-dom');
let GameBoard = require('./gameBoard')

let App = React.createClass({
	render: function() {
		return (
			<GameBoard />
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app-container'));

module.exports = App;