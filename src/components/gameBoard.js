let React = require('react');
let Square = require('./square')

let GameBoard = React.createClass({
	render: function() {
		return (
		<div className="game-board">
			<div className="game-board-row">
					<Square />
					<Square />
					<Square />
			</div>
			<div className="game-board-row">
					<Square />
					<Square />
					<Square />
			</div>
			<div className="game-board-row">
					<Square />
					<Square />
					<Square />
			</div>
		</div>
		)
	}
})

module.exports = GameBoard;