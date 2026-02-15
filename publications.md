---
layout: modern-fullwidth
title: "Antonio Marino - Publications"
section: "publicationsS"
header_name: "Antonio Marino"
---

<div class="content-section">
  <h1>Publications</h1>
  
  <!-- Publications Section -->
  <section class="publications-section">
    
    <!-- Tag Filter -->
    <div class="tag-filter-container">
      <h3>Filter by Tags:</h3>
      <div class="tag-buttons">
        {% for tag in site.data.config.tags %}
        <button class="tag-btn{% if tag.id == 'all' %} active{% endif %}" data-tag="{{ tag.id }}">
          {{ tag.name }}
        </button>
        {% endfor %}
      </div>
    </div>
    
    <!-- Publications List -->
    <div class="publications-list">
      {% assign sorted_publications = site.data.publications.publications | sort: 'year' | reverse %}
      {% for pub in sorted_publications %}
      <div class="publication-card" data-tags="{{ pub.tags | join: ',' }}">
        <div class="publication-header" onclick="togglePublication('{{ pub.id }}')">
          <h3>{{ pub.title }}</h3>
          <div class="publication-meta">
            <span class="venue venue-{{ pub.venue_type }}">
              {% assign venue_config = site.data.config.venue_types[pub.venue_type] %}
              {{ venue_config.icon }} {{ pub.venue }}
            </span>
            <span class="year">{{ pub.year }}</span>
            <span class="expand-icon">+</span>
          </div>
        </div>
        <div class="publication-tags">
          {% for tag in pub.tags %}
          <span class="pub-tag">
            {% assign tag_config = site.data.config.tags | where: 'id', tag | first %}
            {{ tag_config.name }}
          </span>
          {% endfor %}
        </div>
        <div class="publication-content" id="{{ pub.id }}" style="display: none;">
          <p><strong>Authors:</strong> {{ pub.authors | join: ', ' }}</p>
          <p><strong>Abstract:</strong> {{ pub.abstract }}</p>
          
          {% if pub.links %}
          <div class="publication-links">
            {% for link in pub.links %}
              {% unless link[0] == 'bibtex' %}
              <a href="{{ link[1] }}" class="pub-link">{{ link[0] | capitalize }}</a>
              {% endunless %}
            {% endfor %}
            {% if pub.links.bibtex %}
            <button class="pub-link bibtex-btn" onclick="showBibtex('{{ pub.id }}')">BibTeX</button>
            {% endif %}
          </div>
          {% endif %}
          
          {% if pub.links.bibtex %}
          <div class="bibtex-container" id="bibtex-{{ pub.id }}" style="display: none;">
            <h4>BibTeX Citation:</h4>
            <pre class="bibtex-code"><code>{{ pub.links.bibtex }}</code></pre>
            <button class="copy-bibtex" onclick="copyBibtex('{{ pub.id }}')">Copy to Clipboard</button>
          </div>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </section>
  
</div>