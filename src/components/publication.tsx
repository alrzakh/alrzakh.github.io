
const Publications = () => {
	return (
		<div id='publications' className='page active'>
			<h2
				style={{
					fontSize: '2rem',
					color: '#8b7355',
					marginBottom: '2rem',
					fontWeight: '400'
				}}
			>
				Publications & Papers
			</h2>

			<div className='publication'>
				<h3>Title of Your First Publication</h3>
				<div className='authors'>
					Author 1, Author 2, <strong>Your Name</strong>, Author 3
				</div>
				<div className='venue'>Conference/Journal Name, 2025</div>
				<div className='abstract'>
					Brief abstract or description of your publication. This should
					summarize the main contributions, methodology, and findings of your
					research work. Keep it concise but informative.
				</div>
				<div className='links'>
					<a href='#' target='_blank'>
						📄 PDF
					</a>
					<a href='#' target='_blank'>
						🔗 DOI
					</a>
					<a href='#' target='_blank'>
						💻 Code
					</a>
				</div>
			</div>

			<div className='publication'>
				<h3>Title of Your Second Publication</h3>
				<div className='authors'>
					<strong>Your Name</strong>, Author 2, Author 3
				</div>
				<div className='venue'>Conference/Journal Name, 2024</div>
				<div className='abstract'>
					Brief abstract or description of your publication. Highlight the key
					contributions and impact of this research work.
				</div>
				<div className='links'>
					<a href='#' target='_blank'>
						📄 PDF
					</a>
					<a href='#' target='_blank'>
						🔗 DOI
					</a>
					<a href='#' target='_blank'>
						📊 arXiv
					</a>
				</div>
			</div>

			<div className='publication'>
				<h3>Title of Your Third Publication</h3>
				<div className='authors'>
					Author 1, <strong>Your Name</strong>
				</div>
				<div className='venue'>Conference/Journal Name, 2023</div>
				<div className='abstract'>
					Brief abstract or description of your publication. Explain the problem
					addressed and the solution proposed in your research.
				</div>
				<div className='links'>
					<a href='#' target='_blank'>
						📄 PDF
					</a>
					<a href='#' target='_blank'>
						🔗 DOI
					</a>
				</div>
			</div>

			<h3
				style={{
					fontSize: '1.5rem',
					color: '#8b7355',
					marginTop: '3rem',
					marginBottom: '1.5rem',
					fontWeight: '400'
				}}
			>
				Working Papers
			</h3>

			<div className='publication'>
				<h3>Title of Work in Progress</h3>
				<div className='authors'>
					<strong>Your Name</strong>, Co-authors
				</div>
				<div className='venue'>Status: Under Review / In Preparation</div>
				<div className='abstract'>
					Brief description of your current research project. Mention the
					objectives and expected contributions.
				</div>
			</div>
		</div>
	)
}

export default Publications
