---
title: Events
permalink: /events/
---
## Upcoming Events

{% assign _today = site.time | date: '%Y-%m-%d' %}
{% assign _events = site.events | where_exp: 'event', 'event.event_date >= _today' %}
{% if _events.size > 0 %}
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


## Previous Events

{% assign _today = site.time | date: '%Y-%m-%d' %}
{% assign _events = site.events | where_exp: 'event', 'event.event_date < _today' %}
{% if _events.size > 0 %}
<ul>
  {% for event in _events limit:5 %}
    <li><a href="{{ site.baseurl }}{{ event.url }}">{{ event.title }}</a><br>
    <em>{{ event.event_date | date: "%m/%d/%Y" }}</em></li>
  {% endfor %}
</ul>
{% else %}
<ul>
  <il>There are no previous events to show at this time.</il>
</ul>
{% endif %}

