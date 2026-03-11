/* ============================================================
   MINIMAL SITE — JavaScript
   Scroll-reveal, mobile nav, research card toggle
   ============================================================ */

(function () {
  'use strict';

  // ---- Sticky nav shadow on scroll ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---- Scroll-reveal (IntersectionObserver) ----
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: make everything visible immediately
    reveals.forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();

// ---- Research card detail toggle ----
function toggleResearchDetail(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');
}

// ---- Publication abstract toggle ----
function toggleAbstract(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');
}

// ---- BibTeX toggle ----
function showBibtex(pubId) {
  var container = document.getElementById('bibtex-' + pubId);
  if (!container) return;
  container.classList.toggle('open');
}

// ---- Copy BibTeX ----
function copyBibtex(pubId) {
  var codeEl = document.querySelector('#bibtex-' + pubId + ' .bibtex-code code');
  var btn = document.querySelector('#bibtex-' + pubId + ' .copy-bibtex');
  if (!codeEl) return;

  navigator.clipboard.writeText(codeEl.textContent).then(function () {
    if (btn) {
      var orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.background = '#059669';
      btn.style.color = '#fff';
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 1800);
    }
  });
}

// ---- Tag filtering (Publications page) ----
document.addEventListener('DOMContentLoaded', function () {
  var tagBtns = document.querySelectorAll('.tag-btn');
  var pubItems = document.querySelectorAll('.pub-item');

  tagBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tagBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var tag = btn.getAttribute('data-tag');

      pubItems.forEach(function (item) {
        if (tag === 'all') {
          item.style.display = '';
        } else {
          var tags = (item.getAttribute('data-tags') || '').split(',');
          item.style.display = tags.indexOf(tag) !== -1 ? '' : 'none';
        }
      });
    });
  });
});
