---
layout: minimal
title: "Antonio Marino - Publications"
section: "publications"
permalink: /publications.html
---

<section class="section" style="padding-top: calc(var(--nav-height) + 3rem);">
  <div class="container--narrow">
    <div class="section-header reveal">
      <h1 class="section-title">Publications</h1>
      <p class="section-subtitle">Peer-reviewed journals, conferences, and workshops.</p>
    </div>

    <!-- Tag Filter -->
    <div class="tag-filter reveal">
      {% for tag in site.data.config.tags %}
      <button class="tag-btn{% if tag.id == 'all' %} active{% endif %}" data-tag="{{ tag.id }}">
        {{ tag.name }}
      </button>
      {% endfor %}
    </div>

    <!-- Publications grouped by year -->
    {% assign sorted_pubs = site.data.publications.publications | sort: 'year' | reverse %}
    {% assign years = sorted_pubs | map: 'year' | uniq %}

    {% for year in years %}
    <div class="pub-year-group reveal">
      <h2 class="pub-year-heading">{{ year }}</h2>
      <ul class="pub-list">
        {% assign year_pubs = sorted_pubs | where: 'year', year %}
        {% for pub in year_pubs %}
        <li class="pub-item" data-tags="{{ pub.tags | join: ',' }}">
          <p class="pub-title" onclick="toggleAbstract('abs-{{ pub.id }}')">{{ pub.title }}</p>
          <p class="pub-authors">
            {% for author in pub.authors %}{% if author == "Antonio Marino" %}<span class="author-highlight">{{ author }}</span>{% else %}{{ author }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}
          </p>
          <p class="pub-venue">
            {{ pub.venue }}
            <span class="venue-badge venue-badge--{{ pub.venue_type }}">{{ pub.venue_type }}</span>
          </p>
          <div class="pub-links">
            {% if pub.links.paper %}
            <a href="{{ pub.links.paper }}" class="pub-link" target="_blank"><i class="fas fa-file-alt"></i> Paper</a>
            {% endif %}
            {% if pub.links.video %}
            <a href="{{ pub.links.video }}" class="pub-link" target="_blank"><i class="fas fa-video"></i> Video</a>
            {% endif %}
            {% if pub.links.bibtex %}
            <button class="pub-link" onclick="event.stopPropagation(); showBibtex('{{ pub.id }}')"><i class="fas fa-quote-right"></i> BibTeX</button>
            {% endif %}
          </div>

          <!-- Abstract (hidden by default) -->
          <div class="pub-abstract" id="abs-{{ pub.id }}">
            {{ pub.abstract }}
          </div>

          <!-- BibTeX (hidden by default) -->
          {% if pub.links.bibtex %}
          <div class="bibtex-container" id="bibtex-{{ pub.id }}">
            <button class="copy-bibtex" onclick="copyBibtex('{{ pub.id }}')">Copy</button>
            <pre class="bibtex-code"><code>{{ pub.links.bibtex }}</code></pre>
          </div>
          {% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>
