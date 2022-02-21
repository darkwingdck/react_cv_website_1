import React, { Component } from 'react'
import project from '../../../Assets/project.png'
import './index.css'

export default class Project extends Component {
  render() {
	return (
		<div className='project'>
			<div className='project__image'>
				<img 
					src={project}
				/>
			</div>
			<div className='project__line'></div>
			<div className='project__name'>Газпром Арена</div>
			<div className='project__description'>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</div>
		</div>
	)
  }
}
