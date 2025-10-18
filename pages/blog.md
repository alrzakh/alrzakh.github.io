---
layout: default
title: Blog
permalink: /blog/
---

# Blog Posts

{% for post in site.posts %}

  <article class="post">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    {{ post.excerpt }}
    <a href="{{ post.url | relative_url }}">Read more →</a>
  </article>
  <hr>
{% endfor %}
```

## **The Core Issue**

The problem is that:

1. Your `_layouts/home.html` is NOT including `{{ content }}` - this is why `index.md` content doesn't show
2. Your `_includes/header.html` is NOT properly looping through navigation data - this is why navigation links are empty

## **Quick Fix Steps**

1. **Go to your GitHub repository**
2. **Edit `_layouts/home.html`** - make sure it has `{{ content }}` in it
3. **Edit `_includes/header.html`** - make sure it loops through `site.data.navigation`
4. **Verify `_data/navigation.yml`** has the correct format (with colons after `name:` and `link:`)
5. **Commit and push**

The key line missing is probably:

```
{{ content }}
```
