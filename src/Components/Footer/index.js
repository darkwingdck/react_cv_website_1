import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
render() {
	return (
		<div className='footer-bg'>
			<footer className='footer'>
				<p className='footer__copyright'>© 2022 Строительная компания</p>
				<p className='footer__author'>Разработано лучшей студей</p>
			</footer>
		</div>
		)
	}
}
