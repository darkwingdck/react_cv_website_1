import React, { Component } from 'react'
import Service from './Service'
import './index.css'
import BlockName from '../BlockName'

export default class Services extends Component {
	render() {
		return (
			<div>
				<BlockName 
					text = 'Чем мы занимаемся?'
					color = 'black'
				/>
				<div className='services'>
					<Service id='service_1'/>
					<Service id='service_2' />
					<Service id='service_3' />
					<Service id='service_4' />
					<Service id='service_5' />
					<Service id='service_6' />
				</div>
			</div>
		)
	}
}
