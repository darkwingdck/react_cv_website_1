import React, { Component } from 'react'
import BlockName from '../BlockName'
import './index.css'

export default class Contacts extends Component {
	render() {
		return (
			<div>
				<BlockName 
					text = 'Контакты'
					color = 'black'
				/>
				<div className='contacts'>
					{this.props.contactsList.map(contact => 
						<div className='contact' key={contact.id}>
							<div className='contact__img'>
								<img 
									src={require('../../Assets/' + contact.img)}
								/>
							</div>
							<p className='contact__title'>{contact.title}</p>
							<p style={{ color: contact.color }} className='contact__text'>{
								contact.text
							}</p>
						</div>
					)}
				</div>
			</div>
		)
	}
}
