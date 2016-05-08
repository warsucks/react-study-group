let React = require('react');
let Square = require('./square')

let GameBoard = React.createClass({
	render: function() {

		// let gridModel = [];
		// let rowOfSquares = []

		// // for(let r = 0; r < this.props.numRows; r++){
		// 	let row = []
		// 	let r = 0
		// 	for(let c = 0; c< this.props.numCols; c++){
		// 		row.push(<Square row={r} col={c} />)
		// 	}
		// // }

		//return row;
		return (
			<Square />
		)
	}
})

module.exports = GameBoard;