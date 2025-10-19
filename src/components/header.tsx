import { Link } from 'react-router'
import { cn } from '../utils/cn'
import { useLocation } from 'react-router'
const Header = () => {
	const location = useLocation()
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link
							to='/'
							className={cn(
								'nav-link',
								location.pathname === '/' ? 'active' : ''
							)}
							data-page='home'
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/cv'
							className={cn(
								'nav-link',
								location.pathname === '/cv' ? 'active' : ''
							)}
							data-page='cv'
						>
							CV
						</Link>
					</li>
					<li>
						<Link
							to='/publications'
							className={cn(
								'nav-link',
								location.pathname === '/publications' ? 'active' : ''
							)}
							data-page='publications'
						>
							Publications
						</Link>
					</li>
					<li>
						<Link to='/contact' className='nav-link' data-page='contact'>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
