---
title: Data
permalink: /data
---

<script src="{{ '/assets/js/table-sort.js' | relative_url }}" defer></script>

<nav class="data-page__nav">
    <ul>
        <li>
            <a href="{{ '/data.json' | relative_url }}"><img src="https://www.w3.org/assets/logos/w3c-2025/png/w3c.png" />Raw DCAT</a>
        </li>
        <li>
            <a href="https://github.com/usgpo/innovation/issues/new"><img src="{{ 'assets/img/GitHub_Invertocat_Black.png' | relative_url }}" />Contribute on GitHub</a>
        </li>
    </ul>
</nav>

<!-- Mobile sort control (visible only on small screens) -->
<div class="mobile-sort-controls">
    <label for="mobile-sort-select">Sort:</label>
    <select id="mobile-sort-select" aria-label="Sort table data">
        <option value="">Default order</option>
        <option value="0-asc">Title (A-Z)</option>
        <option value="0-desc">Title (Z-A)</option>
        <option value="2-asc">Publisher (A-Z)</option>
        <option value="2-desc">Publisher (Z-A)</option>
    </select>
</div>

<table class="dcat-data">
    <thead>
        <tr>
            <th scope="col">
                <button>
                    Title
                    <span></span>
                </button>
            </th>
            <th scope="col">
                <button>
                    Description
                    <span></span>
                </button></th>
            <th scope="col">
                <button>
                    Publisher
                    <span></span>
                </button>
            </th>
            <th scope="col">
                <button>
                    Frequency
                    <span></span>
                </button></th>
            <th scope="col">
                <button>
                    JSON
                    <span></span>
                </button></th>
        </tr>
    </thead>
    <tbody>
        {% for dataset in site.data.data["dcat:dataset"] %}
            <tr>
                <th scope="row" data-label="Title"><a href="{{ dataset['dcat:landingPage'] }}">{{ dataset["dcterms:title"] }}</a></th>
                <td data-label="Description">{{ dataset["dcterms:description"] | newline_to_br }}</td>
                <td data-label="Publisher">
                    {% if dataset["dcterms:publisher"]["@id"] and dataset["dcterms:publisher"]["@id"] != "" %}
                        <a href="{{ dataset["dcterms:publisher"]["@id"] }}">{{ dataset["dcterms:publisher"]["foaf:name"] }}</a>
                    {% else %}
                        {{ dataset["dcterms:publisher"]["foaf:name"] }}
                    {% endif %}
                </td>
                <td data-label="Frequency">{{ dataset["dcterms:accrualPeriodicity"] }}</td>
                <td data-label="JSON">
                    <pre style="display: none">{{dataset | jsonify}}</pre>
                    <a href="javascript:void(0)" onClick="navigator.clipboard.writeText(this.parentNode.getElementsByTagName('pre')[0].innerText)">📋&#8288;Copy&nbsp;DCAT</a>
                </td>
            </tr>
        {% endfor %}
    </tbody>
</table>