import React, { Component } from 'react'
import Partner from './Partner'
import './index.css'
import BlockName from '../BlockName'

export default class Partners extends Component {
	render() {
		return (
			<div className='partners-bg'>
				<BlockName 
					text='Наши партнеры'
					color='white'
				/>
				<div className='partners'>
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
				</div>
			</div>
		)
	}
}