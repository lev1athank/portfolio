import React from 'react'
import ReactDOM from 'react-dom/client'
import CardsPage from './page/cards/CardsPage'
import Header from './UI/header/header'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<CardsPage />
		</BrowserRouter>
	</React.StrictMode>,
)
