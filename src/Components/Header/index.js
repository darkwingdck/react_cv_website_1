import React, { Component } from 'react'
import header_background from '../../Assets/header_img.png'
import header_logo from '../../Assets/header_logo.png'
import header_button from '../../Assets/header_menu-button.png'
import './index.css'

export default class Header extends Component {
  render() {
	return (
		<div className='header'>
			<div className='header-background'>
				<img 
					src={header_background}
					className="header-background__image"
				/>
			</div>
			<div className='header-menu'>
				<div className='header-menu__logo'>
					<img 
						src={header_logo}
						className='header-menu__logo-image'
					/>
				</div>
				<div className='header-menu__button'>
					<img 
						src={header_button}
						className='header-menu__button-image'
					/>
				</div>
			</div>
			<div className='header-text'>
				<p>Реализуем крупнейшие проекты в России</p>
				<div className='header-text__text-bottom'>Стадионы, газопроводы, мосты, дамбы</div>
			</div>
			<div className='header-dates'>
				<div className='header-dates__date'>
					<p>26</p>
					<p>ЛЕТ</p>
					<p>на рынке</p>
				</div>
				<div className='header-dates__date'>
					<p>26</p>
					<p>ЛЕТ</p>
					<p>на рынке</p>
				</div>
				<div className='header-dates__date'>
					<p>26</p>
					<p>ЛЕТ</p>
					<p>на рынке</p>
				</div>
				<div className='header-dates__date'>
					<p>26</p>
					<p>ЛЕТ</p>
					<p>на рынке</p>
				</div>
			</div>
		</div>
	)
  }
}
