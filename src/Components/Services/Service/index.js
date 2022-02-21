import React, { Component } from 'react'
import service from '../../../Assets/service.png'
import './index.css'

export default class Service extends Component {
	render() {
		return (
			<div className='service' id={this.props.id}>
				<div className='service__image'>
					<img 
						src={service}
					/>
				</div>
				<div className='service__text'>Строительство офисных зданий</div>
			</div>
		)
	}
}
