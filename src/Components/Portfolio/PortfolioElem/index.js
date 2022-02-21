import React, { Component } from 'react'
import portfolio from '../../../Assets/portfolio.png'

export default class PortfolioElem extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<img 
					src={portfolio}
				/>
			</div>
		)
	}
}
