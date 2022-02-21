import React, { Component } from 'react'
import './index.css'

export default class Request extends Component {
	render() {
		return (
			<div className='request-bg'>
				<div className='request'>
					<div className='request__text'>
						<p>{this.props.text_1}</p>
						<p>{this.props.text_2}</p>
					</div>
					<div className='request-button'>
						<div className='request-button__icon'>
							<i className="fa-solid fa-envelope"></i>
						</div>
						<div className='request-button__text'>
							<p>Ваш запрос</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
