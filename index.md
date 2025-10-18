---
layout: home
title: Home
---

## Welcome to My Personal Website

Hi, I'm [Your Name], a [Your Profession/Title]. This is my space to share my thoughts, projects, and more.

[Learn More About Me](/about/)

## Featured Projects

{% for project in site.data.projects %}

- **{{ project.name }}** - {{ project.description }}
  [View Project]({{ project.url }})
  {% endfor %}
