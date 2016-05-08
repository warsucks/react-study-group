let React = require('react');
let Square = require('./square')

let GameBoard = React.createClass({
	render: function() {
		return (
		<div className="game-board">
			<div>
				<Square />
				<Square />
				<Square />
			</div>
			<div>
				<Square />
				<Square />
				<Square />
			</div>
			<div>
				<Square />
				<Square />
				<Square />
			</div>
		</div>
		)
	}
})

module.exports = GameBoard;