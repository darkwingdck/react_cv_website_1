import React, { Component } from 'react'
import Project from './Project'
import './index.css'
import BlockName from '../BlockName'

export default class Projects extends Component {
  render() {
	return (
		<div>
			<BlockName 
				text = 'Наши самые большие проекты'
				color = 'var(--dark)'
			/>
			<div className='projects'>
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	)
  }
}
