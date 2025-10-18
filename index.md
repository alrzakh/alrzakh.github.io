---
layout: home
title: Home
---

<div style="display: flex; align-items: center; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="/assets/images/profile.jpg" alt="Your Name" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <div style="flex: 1; min-width: 250px;">
    <h2>Welcome!</h2>
    <p>I'm <strong>[Your Name]</strong>, a [your role] interested in [your field]. This is my personal space where I share my research, projects, and thoughts.</p>
    <p><a href="/about/">Learn More About Me</a></p>
  </div>
</div>

## Latest Updates

- Check out my recent [papers](/papers/)
- Explore my [projects](/projects/)
- Read my [blog posts](/blog/)

## Featured Projects

{% for project in site.data.projects limit:2 %}

- **{{ project.name }}** - {{ project.description }}  
   [View Project]({{ project.url }})
  {% endfor %}

## Recent Blog Posts

{% for post in site.posts limit:3 %}

- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
  {% endfor %}
