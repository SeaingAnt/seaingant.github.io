---
layout: minimal
title: "Antonio Marino — Researcher"
section: "home"
permalink: /home.html
---

<!-- Hero Section -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-text reveal">
      <p class="hero-tagline">Research Associate · University of Cambridge</p>
      <h1 class="hero-heading">Advancing autonomous systems through learning-based multi-robot control.</h1>
      <p class="hero-subheading">
        I develop hybrid approaches that merge deep learning with provable control structures,
        enabling robot teams to coordinate safely in complex, unstructured environments.
      </p>
      <div class="hero-cta">
        <a href="/research.html" class="btn btn-primary">
          <i class="fas fa-microscope"></i> View Research
        </a>
        <a href="/publications.html" class="btn btn-outline">
          <i class="fas fa-file-alt"></i> Publications
        </a>
      </div>

      <div class="focus-chips">
        <span class="focus-chip">Multi-Robot Systems</span>
        <span class="focus-chip">Graph Neural Networks</span>
        <span class="focus-chip">Hybrid Learning &amp; Control</span>
        <span class="focus-chip">Reinforcement Learning</span>
      </div>
    </div>

    <div class="hero-photo-wrapper reveal">
      {% if site.logo %}
        <img src="{{ site.logo | relative_url }}" alt="Antonio Marino" class="hero-photo" />
      {% endif %}
      <div class="hero-social">
        <a href="mailto:antonio.marino@cl.cam.ac.uk" class="social-btn" title="Email"><i class="fas fa-envelope"></i></a>
        <a href="https://scholar.google.com/" class="social-btn" title="Google Scholar" target="_blank"><i class="fas fa-graduation-cap"></i></a>
        <a href="https://github.com/SeaingAnt" class="social-btn" title="GitHub" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/antonio-marino-841386192" class="social-btn" title="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>

      <!-- News -->
      <div class="hero-news">
        <h3 class="hero-news-title"><i class="fas fa-bullhorn"></i> News</h3>
        <ul class="news-list">
          <li class="news-item"><span class="news-date">Dec 2025</span> — PhD dissertation Inria centre at Rennes University.</li>
          <li class="news-item"><span class="news-date">Oct 2025</span> — Joined the University of Cambridge as a Research Associate.</li>
          <li class="news-item"><span class="news-date">Jul 2025</span> — Paper on distributed active-sensing accepted at IEEE RA-L.</li>
          <li class="news-item"><span class="news-date">Jun 2025</span> — Paper on dynamic cluster agreements published in IEEE RA-L.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Brief Bio + Featured Paper -->
<section class="section section--gray">
  <div class="container--narrow">
    <div class="reveal">
      <p style="font-size: 1.05rem; line-height: 1.85; color: var(--text-secondary); text-align: center; font-weight: 300;">
        I am a Postdoctoral Researcher in Computer Science at the
        <strong style="color: var(--text-primary);">University of Cambridge</strong> (Prorok Lab).
        My research merges multi-robot systems with learning-based control to create intelligent,
        safe, and collaborative autonomous teams.
      </p>
    </div>

    <!-- Featured Publication -->
    {% assign featured = site.data.publications.publications | where: "featured", true | sort: "year" | reverse | first %}
    {% if featured %}
    <a href="{{ featured.links.paper }}" class="featured-pub reveal" style="display: block; text-decoration: none;">
      <p class="featured-pub-label"><i class="fas fa-star"></i> Latest Publication</p>
      <p class="featured-pub-title">{{ featured.title }}</p>
      <p class="featured-pub-meta">
        {{ featured.authors | join: ', ' }} &middot;
        <em>{{ featured.venue }}</em>, {{ featured.year }}
      </p>
    </a>
    {% endif %}
  </div>
</section>
