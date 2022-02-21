import React, { Component } from 'react'
import BlockName from '../BlockName'
import './index.css'

export default class Reviews extends Component {
	render() {
		return (
			<div>
				<BlockName 
					text = 'Отзывы о работе с нами'
					color = 'black'
				/>
				<div className='reviews'>
					{this.props.reviewslist.map(review => 
						<div className='review' key={review.id}>
							<div className='review-main'>
								<p className='review-main__quotes'>“</p>
								<p className='review-main__text'>{review.text}</p>
							</div>
							<div className='review-author'>
								<span className='review-author__name'>{review.name}, </span>
								<span className='review-author__company'>{review.company}</span>
							</div>
						</div>
						
					)}
				</div>

			</div>
		)
	}
}
