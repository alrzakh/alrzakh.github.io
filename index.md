<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alireza Khodaie - Personal Website</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #333;
            background-color: #fafafa;
        }

        /* Navigation */
        nav {
            background-color: #fff;
            padding: 1.5rem 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 2.5rem;
            flex-wrap: wrap;
        }

        nav a {
            text-decoration: none;
            color: #555;
            font-size: 1rem;
            transition: color 0.3s ease;
            position: relative;
        }

        nav a:hover {
            color: #8b7355;
        }

        nav a.active {
            color: #8b7355;
        }

        nav a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 50%;
            background-color: #8b7355;
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        nav a:hover::after,
        nav a.active::after {
            width: 100%;
        }

        /* Container */
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 3rem 2rem;
        }

        /* Page Content */
        .page {
            display: none;
            animation: fadeIn 0.5s ease;
        }

        .page.active {
            display: block;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Home Page */
        .profile-section {
            text-align: center;
            padding: 2rem 0;
        }

        .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 2rem;
            border: 5px solid #fff;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .profile-section h1 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 0.5rem;
            font-weight: 400;
        }

        .profile-section .subtitle {
            font-size: 1.2rem;
            color: #8b7355;
            margin-bottom: 2rem;
            font-style: italic;
        }

        .bio {
            max-width: 700px;
            margin: 0 auto;
            text-align: justify;
            line-height: 1.8;
            color: #555;
            font-size: 1.05rem;
        }

        /* CV Page */
        .cv-section {
            margin-bottom: 3rem;
        }

        .cv-section h2 {
            font-size: 1.8rem;
            color: #8b7355;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e0e0e0;
            font-weight: 400;
        }

        .cv-item {
            margin-bottom: 2rem;
            padding-left: 1rem;
        }

        .cv-item h3 {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 0.3rem;
            font-weight: 500;
        }

        .cv-item .date {
            color: #888;
            font-style: italic;
            margin-bottom: 0.5rem;
        }

        .cv-item p {
            color: #555;
            line-height: 1.7;
        }

        .cv-item ul {
            margin-left: 1.5rem;
            color: #555;
        }

        .cv-item ul li {
            margin-bottom: 0.3rem;
        }

        /* Publications Page */
        .publication {
            margin-bottom: 2.5rem;
            padding: 1.5rem;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .publication:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .publication h3 {
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .publication .authors {
            color: #666;
            margin-bottom: 0.3rem;
            font-size: 0.95rem;
        }

        .publication .venue {
            color: #8b7355;
            font-style: italic;
            margin-bottom: 0.5rem;
        }

        .publication .abstract {
            color: #555;
            line-height: 1.6;
            margin-top: 0.5rem;
        }

        .publication .links {
            margin-top: 1rem;
        }

        .publication .links a {
            color: #8b7355;
            text-decoration: none;
            margin-right: 1rem;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .publication .links a:hover {
            color: #6b5335;
            text-decoration: underline;
        }

        /* Contact Page */
        .contact-info {
            background-color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .contact-info h2 {
            font-size: 1.8rem;
            color: #8b7355;
            margin-bottom: 1.5rem;
            font-weight: 400;
        }

        .contact-item {
            margin-bottom: 1.5rem;
        }

        .contact-item strong {
            color: #333;
            display: block;
            margin-bottom: 0.3rem;
        }

        .contact-item a {
            color: #8b7355;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .contact-item a:hover {
            color: #6b5335;
            text-decoration: underline;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 2rem 0;
            color: #888;
            font-size: 0.9rem;
            margin-top: 3rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav ul {
                gap: 1.5rem;
            }

            .profile-section h1 {
                font-size: 2rem;
            }

            .container {
                padding: 2rem 1rem;
            }

            .profile-image {
                width: 150px;
                height: 150px;
            }
        }
    </style>

</head>
<body>
    <nav>
        <ul>
            <li><a href="#home" class="nav-link active" data-page="home">Home</a></li>
            <li><a href="#cv" class="nav-link" data-page="cv">CV</a></li>
            <li><a href="#publications" class="nav-link" data-page="publications">Publications</a></li>
            <li><a href="#contact" class="nav-link" data-page="contact">Contact</a></li>
        </ul>
    </nav>

    <div class="container">
        <!-- Home Page -->
        <div id="home" class="page active">
            <div class="profile-section">
                <img src="assets/images/profile.jpg" alt="Alireza Khodaie" class="profile-image" onerror="this.src='https://via.placeholder.com/200'">
                <h1>Alireza Khodaie</h1>
                <p class="subtitle">Computer Engineer Student</p>
                <div class="bio">
                    <p>
                        Welcome to my personal website. I'm a computer engineer and privacy researcher passionate about developing privacy-preserving technologies for data collection, analysis, and learning. My work primarily focuses on <strong>differential privacy (DP)</strong> and <strong>local differential privacy (LDP)</strong>. designing mechanisms that enable useful data analytics while rigorously protecting individual privacy.

                        Currently, I'm preparing to pursue a <strong>Ph.D.</strong> in computer science, aiming to deepen my research in privacy-preserving data analysis and contribute to academic research in this field.
                    </p>
                    <p style="margin-top: 1rem;">
                        I am particularly interested in <strong>Local Differential Privacy (LDP)</strong> and have contributed to multiple research projects in this area, focusing on developing novel LDP mechanisms, designing benchmarking frameworks, and building open-source tools for privacy-preserving data analysis.
                        Through this website, I share my <strong>academic journey</strong>, <strong>publications</strong>, and <strong>ongoing research projects</strong> in data privacy and security.
                        I welcome opportunities for <strong>collaboration and discussion</strong> on advancing privacy-preserving technologies.
                    </p>
                </div>
            </div>
        </div>

        <!-- CV Page -->
        <div id="cv" class="page">
            <div class="cv-section">
                <h2>Education</h2>
                <div class="cv-item">
                    <h3>Ph.D. in Computer Engineering</h3>
                    <div class="date">Koc University, 2025-present</div>
                    <p>Advisor: Prof. Mehmet Emre Gursoy</p>
                </div>
                <div class="cv-item">
                    <h3>M.Sc. in Computer Engineering</h3>
                    <div class="date">Koc University, 2022-2025</div>
                    <p>Thesis: Learning Bayesian Nerworks under Local Differential Privacy</p>
                </div>
                <div class="cv-item">
                    <h3>B.Sc. in Computer Engineering</h3>
                    <div class="date">Tabriz University, 2017-2021</div>
                </div>
            </div>

            <div class="cv-section">
                <h2>Professional Experience</h2>
                <div class="cv-item">
                    <h3>Current Position Title</h3>
                    <div class="date">Institution Name, 2020-Present</div>
                    <p>Description of your current role and key responsibilities. Mention major achievements and projects you're working on.</p>
                </div>
                <div class="cv-item">
                    <h3>Previous Position Title</h3>
                    <div class="date">Institution Name, 2018-2020</div>
                    <p>Description of your previous role and notable achievements during this period.</p>
                </div>
            </div>

            <div class="cv-section">
                <h2>Research Interests</h2>
                <div class="cv-item">
                    <ul>
                        <li>Research interest area 1</li>
                        <li>Research interest area 2</li>
                        <li>Research interest area 3</li>
                        <li>Research interest area 4</li>
                    </ul>
                </div>
            </div>

            <div class="cv-section">
                <h2>Skills</h2>
                <div class="cv-item">
                    <p><strong>Technical Skills:</strong> List your technical skills, programming languages, tools, frameworks, etc.</p>
                    <p><strong>Languages:</strong> List languages you speak (e.g., English - Native, Arabic - Fluent, etc.)</p>
                    <p><strong>Other Skills:</strong> Any other relevant skills or competencies</p>
                </div>
            </div>

            <div class="cv-section">
                <h2>Awards & Honors</h2>
                <div class="cv-item">
                    <h3>Award Name</h3>
                    <div class="date">Institution, Year</div>
                    <p>Brief description of the award.</p>
                </div>
            </div>
        </div>

        <!-- Publications Page -->
        <div id="publications" class="page">
            <h2 style="font-size: 2rem; color: #8b7355; margin-bottom: 2rem; font-weight: 400;">Publications & Papers</h2>

            <div class="publication">
                <h3>Title of Your First Publication</h3>
                <div class="authors">Author 1, Author 2, <strong>Your Name</strong>, Author 3</div>
                <div class="venue">Conference/Journal Name, 2025</div>
                <div class="abstract">
                    Brief abstract or description of your publication. This should summarize the main contributions,
                    methodology, and findings of your research work. Keep it concise but informative.
                </div>
                <div class="links">
                    <a href="#" target="_blank">📄 PDF</a>
                    <a href="#" target="_blank">🔗 DOI</a>
                    <a href="#" target="_blank">💻 Code</a>
                </div>
            </div>

            <div class="publication">
                <h3>Title of Your Second Publication</h3>
                <div class="authors"><strong>Your Name</strong>, Author 2, Author 3</div>
                <div class="venue">Conference/Journal Name, 2024</div>
                <div class="abstract">
                    Brief abstract or description of your publication. Highlight the key contributions and impact
                    of this research work.
                </div>
                <div class="links">
                    <a href="#" target="_blank">📄 PDF</a>
                    <a href="#" target="_blank">🔗 DOI</a>
                    <a href="#" target="_blank">📊 arXiv</a>
                </div>
            </div>

            <div class="publication">
                <h3>Title of Your Third Publication</h3>
                <div class="authors">Author 1, <strong>Your Name</strong></div>
                <div class="venue">Conference/Journal Name, 2023</div>
                <div class="abstract">
                    Brief abstract or description of your publication. Explain the problem addressed and the
                    solution proposed in your research.
                </div>
                <div class="links">
                    <a href="#" target="_blank">📄 PDF</a>
                    <a href="#" target="_blank">🔗 DOI</a>
                </div>
            </div>

            <h3 style="font-size: 1.5rem; color: #8b7355; margin-top: 3rem; margin-bottom: 1.5rem; font-weight: 400;">Working Papers</h3>

            <div class="publication">
                <h3>Title of Work in Progress</h3>
                <div class="authors"><strong>Your Name</strong>, Co-authors</div>
                <div class="venue">Status: Under Review / In Preparation</div>
                <div class="abstract">
                    Brief description of your current research project. Mention the objectives and expected contributions.
                </div>
            </div>
        </div>

        <!-- Contact Page -->
        <div id="contact" class="page">
            <div class="contact-info">
                <h2>Get In Touch</h2>
                <div class="contact-item">
                    <strong>Email</strong>
                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                </div>
                <div class="contact-item">
                    <strong>Academic Email</strong>
                    <a href="mailto:your.academic@university.edu">your.academic@university.edu</a>
                </div>
                <div class="contact-item">
                    <strong>LinkedIn</strong>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
                </div>
                <div class="contact-item">
                    <strong>GitHub</strong>
                    <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>
                </div>
                <div class="contact-item">
                    <strong>Google Scholar</strong>
                    <a href="https://scholar.google.com/citations?user=yourID" target="_blank">Google Scholar Profile</a>
                </div>
                <div class="contact-item">
                    <strong>ORCID</strong>
                    <a href="https://orcid.org/0000-0000-0000-0000" target="_blank">0000-0000-0000-0000</a>
                </div>
                <div class="contact-item">
                    <strong>Office Address</strong>
                    Department Name<br>
                    University/Institution Name<br>
                    Building Name, Room Number<br>
                    City, Postal Code, Country
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 Alireza Khodaie. All rights reserved.</p>
    </footer>

    <script>
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all links and pages
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));

                // Add active class to clicked link and corresponding page
                link.classList.add('active');
                const pageId = link.getAttribute('data-page');
                document.getElementById(pageId).classList.add('active');

                // Update URL hash
                window.location.hash = pageId;

                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Handle page load with hash
        window.addEventListener('load', () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const targetLink = document.querySelector('[data-page="' + hash + '"]');
                if (targetLink) {
                    targetLink.click();
                }
            }
        });
    </script>

</body>
</html>
