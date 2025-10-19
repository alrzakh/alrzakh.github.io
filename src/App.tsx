import { Route, Routes } from 'react-router'
import CV from './components/cv'
import Home from './components/home'
import Contacts from './components/contact'
import Publications from './components/publication'
import Layout from './components/layout'

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/cv' element={<CV />} />
					<Route path='/publications' element={<Publications />} />
					<Route path='/contact' element={<Contacts />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
