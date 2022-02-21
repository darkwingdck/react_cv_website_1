import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Projects from './Components/Projects'
import Request from './Components/Request'
import Services from './Components/Services'
import Questions from './Components/Questions'
import questionList from './questionsList'
import Partners from './Components/Partners'
import Reviews from './Components/Reviews'
import reviewslist from './reviewslist'
import Contacts from './Components/Contacts'
import contactsList from './contactslist'
import Footer from './Components/Footer'

export default class App extends Component {
  render() {
	return (
		<div>
			<Header/>
			<Projects />
			<Request 
				text_1="Самые умные проекты" 
				text_2="Реализуем самые смелые решения в России!"
			/>
			<Services />
			<Portfolio />
			<Questions questionList={questionList}/>
			<Partners />
			<Reviews reviewslist={reviewslist}/>
			<Request 
				text_1="Хотите с нами работать?" 
				text_2="Оставьте заявку и мы свяжемся с вами!"
			/>
			<Contacts contactsList={contactsList}/>
			<Footer />
		</div>
	)
  }
}