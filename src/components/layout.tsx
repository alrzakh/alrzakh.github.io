import { Outlet } from 'react-router'
import Footer from './footer'
import Header from './header'

const Layout = () => {
	return (
		<div className='container'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
