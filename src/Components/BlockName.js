import React, { Component } from 'react'

export default class BlockName extends Component {
	render() {
		return (
			<div className='block-name' style={{ color: this.props.color }}>
				{this.props.text}
			</div>
	)
	}
}
