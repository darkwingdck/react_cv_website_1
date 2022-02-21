import React, { Component } from 'react'
import partnerImg from '../../../Assets/partner.png'

export default class Partner extends Component {
	render() {
		return (
			<div className='partner__image'>
				<img 
					src={partnerImg}
				/>
			</div>
		)
	}
}
