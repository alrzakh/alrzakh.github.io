
const Home = () => {
	return (
		<div id='home' className='page active'>
			<div className='profile-section'>
				<img
					src='avatar.jpg'
					alt='Alireza Khodaie'
					className='profile-image mx-auto'
					onError={e =>
						(e.currentTarget.src = 'https://via.placeholder.com/200')
					}
				/>
				<h1>Alireza Khodaie</h1>
				<p className='subtitle'>Computer Engineer Student</p>
				<div className='bio'>
					<p>
						Welcome to my personal website. I'm a computer engineer and privacy
						researcher passionate about developing privacy-preserving
						technologies for data collection, analysis, and learning. My work
						primarily focuses on <strong>differential privacy (DP)</strong> and{' '}
						<strong>local differential privacy (LDP)</strong>. designing
						mechanisms that enable useful data analytics while rigorously
						protecting individual privacy. Currently, I'm preparing to pursue a{' '}
						<strong>Ph.D.</strong> in computer science, aiming to deepen my
						research in privacy-preserving data analysis and contribute to
						academic research in this field.
					</p>
					<p style={{ marginTop: '1rem' }}>
						I am particularly interested in{' '}
						<strong>Local Differential Privacy (LDP)</strong> and have
						contributed to multiple research projects in this area, focusing on
						developing novel LDP mechanisms, designing benchmarking frameworks,
						and building open-source tools for privacy-preserving data analysis.
						Through this website, I share my <strong>academic journey</strong>,{' '}
						<strong>publications</strong>, and{' '}
						<strong>ongoing research projects</strong> in data privacy and
						security. I welcome opportunities for{' '}
						<strong>collaboration and discussion</strong> on advancing
						privacy-preserving technologies.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
