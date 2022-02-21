import React, { Component } from 'react'
import './index.css'
import BlockName from '../BlockName'

export default class Questions extends Component {
	render() {
		return (
			<div className='questions'>
				<BlockName 
					text = 'Ответы на вопросы'
					color = 'black'
				/>
				{this.props.questionList.map(question => 
					<div className='question' key={question.id}>
						<details className='question__details'>
							<summary className='question__summary'>{question.title}</summary>
							<p className='question__text'>{question.text}</p>
						</details>
					</div>
					
				)}
			</div>
		)
	}
}
