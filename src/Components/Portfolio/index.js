import React, { Component } from 'react'
import PortfolioElem from './PortfolioElem'
import './index.css'

export default class Portfolio extends Component {
	render() {
		return (
			<div className='portfolio'>
				<PortfolioElem className="portfolio-elem-1"/>
				<PortfolioElem className="portfolio-elem-2" />
				<PortfolioElem className="portfolio-elem-3" />
				<PortfolioElem className="portfolio-elem-4" />
				<PortfolioElem className="portfolio-elem-5" />
				<PortfolioElem className="portfolio-elem-6" />
				<PortfolioElem className="portfolio-elem-7" />
				<PortfolioElem className="portfolio-elem-8" />
			</div>
		)
	}
}
