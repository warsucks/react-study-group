let React = require('react');
let ReactDOM = require('react-dom');
let GameBoard = require('./gameBoard')

let App = React.createClass({
	render: function() {
		return (
			<GameBoard 
				numRows={3} 
				numCols={3} />
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app-container'));

module.exports = App;