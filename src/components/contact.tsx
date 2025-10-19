
const Contacts = () => {
	return (
		<div id='contact' className='page active'>
			<div className='contact-info'>
				<h2>Get In Touch</h2>
				<div className='contact-item'>
					<strong>Email</strong>
					<a href='mailto:your.email@example.com'>your.email@example.com</a>
				</div>
				<div className='contact-item'>
					<strong>Academic Email</strong>
					<a href='mailto:your.academic@university.edu'>
						your.academic@university.edu
					</a>
				</div>
				<div className='contact-item'>
					<strong>LinkedIn</strong>
					<a href='https://linkedin.com/in/yourprofile' target='_blank'>
						linkedin.com/in/yourprofile
					</a>
				</div>
				<div className='contact-item'>
					<strong>GitHub</strong>
					<a href='https://github.com/yourusername' target='_blank'>
						github.com/yourusername
					</a>
				</div>
				<div className='contact-item'>
					<strong>Google Scholar</strong>
					<a
						href='https://scholar.google.com/citations?user=yourID'
						target='_blank'
					>
						Google Scholar Profile
					</a>
				</div>
				<div className='contact-item'>
					<strong>ORCID</strong>
					<a href='https://orcid.org/0000-0000-0000-0000' target='_blank'>
						0000-0000-0000-0000
					</a>
				</div>
				<div className='contact-item'>
					<strong>Office Address</strong>
					Department Name
					<br />
					University/Institution Name
					<br />
					Building Name, Room Number
					<br />
					City, Postal Code, Country
					<br />
				</div>
			</div>
		</div>
	)
}

export default Contacts
