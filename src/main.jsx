import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './UI/Main/mainPage'
import Header from './UI/header/header'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Main />
		</BrowserRouter>
	</React.StrictMode>,
)
