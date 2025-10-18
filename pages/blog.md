# Blog

Welcome to my blog! Here, I share my thoughts, experiences, and projects. Feel free to explore my posts below.

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}

Thank you for visiting!