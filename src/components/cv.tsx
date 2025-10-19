const CV = () => {
	return (
		<div id='cv' className='page active'>
			<div className='cv-section'>
				<h2>Education</h2>
				<div className='cv-item'>
					<h3>Ph.D. in Computer Engineering</h3>
					<div className='date'>Koc University, 2025-present</div>
					<p>Advisor: Prof. Mehmet Emre Gursoy</p>
				</div>
				<div className='cv-item'>
					<h3>M.Sc. in Computer Engineering</h3>
					<div className='date'>Koc University, 2022-2025</div>
					<p>
						Thesis: Learning Bayesian Nerworks under Local Differential Privacy
					</p>
					<p>Advisor: Prof. Mehmet Emre Gursoy</p>
				</div>
				<div className='cv-item'>
					<h3>B.Sc. in Computer Engineering</h3>
					<div className='date'>Tabriz University, 2017-2021</div>
				</div>
			</div>

			<div className='cv-section'>
				<h2>Professional Experience</h2>
				<div className='cv-item'>
					<h3>Current Position Title</h3>
					<div className='date'>Institution Name, 2020-Present</div>
					<p>
						Description of your current role and key responsibilities. Mention
						major achievements and projects you're working on.
					</p>
				</div>
				<div className='cv-item'>
					<h3>Previous Position Title</h3>
					<div className='date'>Institution Name, 2018-2020</div>
					<p>
						Description of your previous role and notable achievements during
						this period.
					</p>
				</div>
			</div>

			<div className='cv-section'>
				<h2>Research Interests</h2>
				<div className='cv-item'>
					<ul>
						<li>Research interest area 1</li>
						<li>Research interest area 2</li>
						<li>Research interest area 3</li>
						<li>Research interest area 4</li>
					</ul>
				</div>
			</div>

			<div className='cv-section'>
				<h2>Skills</h2>
				<div className='cv-item'>
					<p>
						<strong>Technical Skills:</strong> List your technical skills,
						programming languages, tools, frameworks, etc.
					</p>
					<p>
						<strong>Languages:</strong> List languages you speak (e.g., English
						- Native, Arabic - Fluent, etc.)
					</p>
					<p>
						<strong>Other Skills:</strong> Any other relevant skills or
						competencies
					</p>
				</div>
			</div>

			<div className='cv-section'>
				<h2>Awards & Honors</h2>
				<div className='cv-item'>
					<h3>Award Name</h3>
					<div className='date'>Institution, Year</div>
					<p>Brief description of the award.</p>
				</div>
			</div>
		</div>
	)
}

export default CV
