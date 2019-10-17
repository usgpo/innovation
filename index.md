---
title: Home
permalink: /

layout: home

hero:
  image: /assets/img/hero5.jpg
  callout:
    text: "It's about making ideas happen."
  content: Connect with innovators. 
  button:
    href: https://usgpo.github.io/innovation/about_the_hub/
    text: Learn More

tagline: Welcome innovators!
intro: |
  The Innovation Hub seeks to highlight Legislative branch activities that use technology to cultivate collaboration, foster data standardization, and increase transparency. 

  *Innovate. Communicate. Legislate.*
---

{% assign hero = page.hero %}
{% include components/hero.html %}

{% if page.tagline and page.intro %}
<section class="usa-grid usa-section">
  <div class="usa-width-two-thirds">
    <h2>{{ page.tagline }}</h2>
    {{ page.intro | markdownify }}
  </div>
  <div class="usa-width-one-third">
    <h3>Upcoming Events</h3>
      {% assign _today = site.time | date: '%Y-%m-%d' %}
      {% assign _events = site.events | where_exp: 'event', 'event.event_date > _today' %}
      {% if _events.size = 0 %}
      <ul>
        {% for event in _events limit:3 %}
          <li><a href="{{ site.baseurl }}{{ event.url }}">{{ event.title }}</a><br>
          <em>{{ event.event_date | date: "%m/%d/%Y" }}</em></li>
        {% endfor %}
      </ul>
      {% else %}
      <p>
        <em>No upcoming events. Check back soon!</em>
      </p>
      {% endif %}
  </div>
</section>
{% endif %}


